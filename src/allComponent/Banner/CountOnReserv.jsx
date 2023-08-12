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
        <div className='bg-gray-200 lg:w-[600px] w-[200px] rounded-2xl lg:mx-28  '>
                 <div  className='flex justify-between'>
                <div className='px-10 '>
                  <p className=' text-[13px] font-medium text-gray-700 tracking-wide '>Total Reservation</p>  
                  <div className='flex'> <p  className='lg:text-3xl  text-2xl'><Reservation /></p> <p className='my-auto ms-4'><FcReading className='lg:w-44'/></p></div>

                </div>
           
                <div className='px-10'>
                  <p className=' text-[13px] font-medium text-gray-700 tracking-wide'>Placec Available</p>  
 <div className='flex'> <p  className='lg:text-3xl  text-2xl'><RoomsAvailable /></p> <p className='my-auto ms-4'><FcDepartment className='lg:w-44'/></p></div>

                </div>
                <div className='px-10'>
                  <p className=' text-[13px] font-medium text-gray-700 tracking-wide'>Countries</p>  
 <div className='flex'> <p  className='lg:text-3xl  text-2xl'><CountriesCount /></p> <p className='my-auto ms-4'><FcGlobe className='lg:w-44'/></p></div>

                </div>
                <div className='px-10'>
                  <p className=' text-[13px] font-medium text-gray-700 tracking-wide'>People Liked</p>  
 <div className='flex'> <p  className='lg:text-3xl  text-2xl'><CountUserUp />K</p> <p className='my-auto ms-4'><FcLike className='lg:w-44'/></p></div>

                </div>
            </div>
        </div>
    );
};

export default CountOnReserv;