
import { formatDistance } from 'date-fns'
import BookingModal from '../../allComponent/modal/BookingModal'
// import { addBooking, updateStatus } from '../../api/bookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useContext, useState } from 'react'
import { Calendar } from 'react-date-range'
import Buttons from './Buttons'
const ReserveDate = ({ dataOFdestination }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const { user, role } = useContext(AuthContext)
  console.log(user)

  // Price Calculation
  const totalPrice =
    parseFloat(
      formatDistance(new Date(dataOFdestination.to), new Date(dataOFdestination.from)).split(
        ' '
      )[0]
    ) * dataOFdestination.price

  const [value, setValue] = useState({
    startDate: new Date(dataOFdestination?.from),
    endDate: new Date(dataOFdestination?.to),
    key: 'selection',
  })

  // Booking state
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user?.displayName, email: user?.email, image: user?.photoURL },
    host: dataOFdestination?.host?.email,
    location: dataOFdestination.location,
    price: totalPrice,
    to: value.endDate,
    from: value?.startDate,
    title: dataOFdestination.title,
    roomId: dataOFdestination._id,
    image: dataOFdestination.image,
  })
  const handleSelect = ranges => {
    setValue({ ...value })
  }

  const modalHandler = () => {
    addBooking(bookingInfo)
      .then(data => {
        console.log(data)
        updateStatus(dataOFdestination._id, true)
          .then(data => {
            console.log(data)
            toast.success('Booking Successful!')
            navigate('/dashboard/my-bookings')
            closeModal()
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  return (
  <div>
    
  </div>
  )
}

export default ReserveDate