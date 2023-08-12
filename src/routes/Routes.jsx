import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layouts/Main'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/Signup'
// import RoomDetails from '../pages/roomDetails/RoomDetails'
import DashBoard from '../layouts/DashBoard'
import AddRoom from '../pages/DashboardPage/AddRoom'
import { getAllRooms, getRoom } from '../api/rooms'
import DestinationDetails from '../pages/roomDetails/DestinationDetails'
import AddDestination from '../pages/DashboardPage/AddDestination'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/room/:id',
        element:<DestinationDetails/>,
        loader:({params})=>getRoom(params.id)
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    children:[
      {
        path:'/dashboard/add-new-destination/',
        element:<AddDestination  />
      }
    ]
  }
])
