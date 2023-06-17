import React from 'react';
import img1 from '../../assets/images/pexels-max-rahubovskiy-6782577.png'
import img2 from '../../assets/images/pexels-rachel-claire-4577654.png'
import CountUserUp from '../CountUp/CountUserUp';
import img3 from '../../assets/images/pexels-nextvoyage-1470403.jpg'
import { Fade, Slide } from "react-awesome-reveal";
const Banner = () => {
    return (
        <div className='p relative h-[870px]  z-0'>
            <div>
                <img className='lg:w-[700px] w-[300px] absolute  lg:blur-0 blur-sm left-10 top-[30px] lg:left-80 rounded-2xl z-20' src={img1} alt="" />
            </div>
            <div>
                <img  className='lg:w-[300px]  w-[150px] left-4   top-[300px] absolute lg:bottom-24 lg:left-32 rounded-2xl z-20' src={img2} alt="" />
            </div>
            {/* <div>
                <img className='top-0  h-[730px] object-cover w-full blur-sm z-10' src={img3} alt="" />
            </div> */}

            {/* <div>
               <button  className='bg-blue-500 btn absolute ' >Book Now</button>
            </div> */}

            <div className='absolute lg:right-[470px] lg:top-[200px]  z-20'>
             <p className=' tracking-wide   text-shadow py-7 lg:bg-white px-10 rounded-2xl'>
                <Slide direction='right'><p className='text-6xl'>Find Your Best Stay</p></Slide>
           
      <Fade delay={1e3} cascade damping={1e-1}>
    <p className='pt-3'>  "Book Your Dream Stay: Experience Hospitality at Its Finest!"</p>
      </Fade>
             </p>
             <button className='z-20 text-2xl bg-black text-white rounded-2xl px-5 lg:py-5 lg:mt-5'>Book now</button>
            </div>
       
            
        </div>
    );
};

export default Banner;