import React from 'react';
import CountUserUp from '../CountUp/CountUserUp';
import like from '../../assets/images/icons8-love-48.png'
import { FcLike, FcReading } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import CountriesCount from '../CountUp/CountriesCount';
import RoomsAvailable from '../CountUp/RoomsAvailable';
import Reservation from '../CountUp/Reservation';
const CountOnReserv = () => {
    return (
        <div className='bg-black rounded-2xl mx-28   '>
                 <div  className='flex justify-between'>
                <div className='px-10 '>
                  <p className=' text-2xl font-medium text-white tracking-wide '>Total Reservation</p>  
                  <div className='flex'> <p style={{fontSize:"60px",color:'white', fontWeight:'bold'}} ><Reservation /></p> <p className='my-auto ms-4'><FcReading size={50}/></p></div>

                </div>
           
                <div className='px-10'>
                  <p className=' text-2xl font-medium text-white tracking-wide'>Rooms Available</p>  
 <div className='flex'> <p style={{fontSize:"60px",color:'white', fontWeight:'bold'}} ><RoomsAvailable /></p> <p className='my-auto ms-4'><FcDepartment size={50}/></p></div>

                </div>
                <div className='px-10'>
                  <p className=' text-2xl font-medium text-white tracking-wide'>Countries</p>  
 <div className='flex'> <p style={{fontSize:"60px",color:'white', fontWeight:'bold'}} ><CountriesCount /></p> <p className='my-auto ms-4'><FcGlobe size={50}/></p></div>

                </div>
                <div className='px-10'>
                  <p className=' text-2xl font-medium text-white tracking-wide'>People Liked</p>  
 <div className='flex'> <p style={{fontSize:"60px",color:'white', fontWeight:'bold'}} ><CountUserUp />K</p> <p className='my-auto ms-4'><FcLike size={50}/></p></div>

                </div>
            </div>
        </div>
    );
};

export default CountOnReserv;