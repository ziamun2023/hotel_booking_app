import { Outlet } from "react-router-dom"
import Navbar from "../allComponent/Shared/navbar/Navbar"
import Footer from "../allComponent/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar/>
<div className="pt-28 pb-20">
<Outlet/>
<Footer></Footer>
</div>
    </div>
  )
}

export default Main
