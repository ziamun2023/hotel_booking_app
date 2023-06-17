import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Main from '../layouts/Main'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/Signup'
import RoomDetails from '../pages/roomDetails/RoomDetails'
import DashBoard from '../layouts/DashBoard'
import AddRoom from '../pages/DashboardPage/AddRoom'


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
        element:<RoomDetails/>
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
        path:'/dashboard/add-new-room/',
        element:<AddRoom/>
      }
    ]
  }
])
