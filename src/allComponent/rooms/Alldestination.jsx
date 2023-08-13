
import React, { useEffect, useState } from 'react'
import Container from '../Shared/MainContainer'
import Card from './Card'
import Loader from '../../allComponent/loader/Loader'
import { useSearchParams } from 'react-router-dom'
import Heading from '../../allComponent/header/Header'
import { getAllRooms } from '../../api/rooms'
import MainContainer from '../Shared/MainContainer'

const Alldestination = () => {
  const rom=getAllRooms()
  console.log(rom);
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getAllRooms()
  
      .then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
        } else {
          setRooms(data)
        }

        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [category])

  if (loading) {
    return <Loader />
  }
  return (
    <>
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-8'>
          {rooms.map((room, index) => (
            <Card key={index} room={room} />
          ))}
        </div>
      ) : (
        <div className='min-h-[calc(100vh-300px)] flex items-center justify-center'>
          <Heading
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
            center={true}
          />
        </div>
      )}
    </>
  )
}

export default Alldestination