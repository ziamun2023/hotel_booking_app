
import img1 from '../../assets/images/flower1.jpg'
import img2 from '../../assets/images/pexels-rachel-claire-4577654.png'
import banner from '../../assets/images/bannerphoto1.png'
import banner2 from '../../assets/images/banner2.jpg'
import banner6 from "../../assets/images/flower8.png"
import banner3 from '../../assets/images/banner4.jpg'
import CountUserUp from '../CountUp/CountUserUp';
import image3 from "../../assets/images/flowerimage1.jpg"
import image4 from "../../assets/images/couple2.jpg"
import image5 from "../../assets/images/couple55.jpg"
import img3 from '../../assets/images/pexels-nextvoyage-1470403.jpg'
import { Fade, Slide } from "react-awesome-reveal";
import MainContainer from '../Shared/MainContainer';
import { Parallax } from 'react-parallax';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Pagination ,Autoplay} from 'swiper/modules';

const Banner = () => {
 

    return (

        <>
         
       
       

        <div className='banner lg:w-full   h-[800px]'>
          <Fade delay={2}>
          <img className='absolute hidden lg:block top-0 z-0' src={banner} alt="" />
          </Fade>
<div className='lg:w-[510px] h-[300px]  w-[110px] rounded-l-full  absolute top-0 right-0'>
<Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination,Autoplay]}
        className="mySwiper"
      >
      
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-l-full object-cover' src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-l-full object-cover' src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-l-full object-cover' src={image5} alt="" />
        </SwiperSlide>
      </Swiper>

   </div>          <Fade  delay={2}>
          <img className='absolute right-0 top-0 w-[300px] z-0' src={banner6} alt="" />
          </Fade>
                     
     <div className='grid lg:grid-cols-2 absolute top-28 justify-items-center  h-[800px] '>
        <div className='mt-10  ms-10'>
        <Fade delay={1e3} cascade damping={1e-1}>
    <p className='pt-3 lg:text-[40px] text-[20px] stylefont'>  "Book Your Dream Destination: Experience Hospitality at Its Finest!"</p>
      </Fade>
        <Fade delay={1e3} cascade damping={1e-1}>
    <p className='pt-3 text-[80px] stylefont'> Gala weeding Destination</p>
      </Fade>
    <p className='border-2 border-black py-2 px-3 rounded-2xl w-[150px] text-center hover:bg-blue-200 duration-500 hover:shadow-xl'>See places</p>
    <p  className='border-2 border-black py-2 px-3 rounded-2xl w-[150px] text-center hover:bg-blue-200 duration-500 hover:shadow-xl'>Play  music</p>
      <div>

      </div>
        </div>
        <div className='my-auto' >
        <Fade delay={1e3}>

        <p className='stylefont font-bold text-4xl lg:text-7xl'>Find Your Best Destination </p>
        </Fade>
          

        </div>

     </div>

            </div>
   
           
        </>
        
    );
};

export default Banner;


{/* <div className='absolute lg:right-[70px] lg:top-[200px]  z-20'>
             <p className=' tracking-wide   text-shadow py-7 lg:bg-white px-10 rounded-2xl'>
                <Fade delay={1e3}><p className='lg:text-6xl'>Find Your Best Destination</p></Fade>
           
      <Fade delay={1e3} cascade damping={1e-1}>
    <p className='pt-3'>  "Book Your Dream Destination: Experience Hospitality at Its Finest!"</p>
      </Fade>
             </p>
             <button className='z-20 text-2xl bg-black text-white rounded-2xl px-5 lg:py-5 lg:mt-5'>Book now</button>
            </div>
       
            
        </div> */}
