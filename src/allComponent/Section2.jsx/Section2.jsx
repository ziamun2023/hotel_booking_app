import  { useEffect } from 'react';
import image3 from "../../assets/images/flowerimage1.jpg"
import image4 from "../../assets/images/couple2.jpg"
import image5 from "../../assets/images/couple55.jpg"
import image1 from "../../assets/images/couple2.jpg"
import image2 from "../../assets/images/flower5.png"
import { Parallax } from 'react-scroll-parallax';
// import {AiOutlineTwitter} from 'react-icons/Ai';
// import {AiFillInstagram} from 'react-icons/Ai';
// import {FaFacebookF} from 'react-icons/Fa';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MainContainer from '../Shared/MainContainer';
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
// ..
AOS.init();
const Section2 = () => {


    return (
      <>
<div className='relative mb-52' >

<div className='grid grid-cols-3  justify-items-center'>
<div >
<Parallax dir='right' speed={-23}>
  <div className='lg:w-[510px] h-[300px]  w-[110px] rounded-r-full'>
  <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination,Autoplay]}
        className="mySwiper"
      >
      
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-r-full object-cover' src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-r-full object-cover' src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='lg:w-[510px] h-[300px]  w-[110px] rounded-r-full object-cover' src={image5} alt="" />
        </SwiperSlide>
      </Swiper>
  </div>

</Parallax>
</div>
<div  data-aos="fade-up"
 data-aos-duration="3000" > 
<div>
<p className='stylefont lg:text-6xl text-3xl text-center my-10'>Join Us in Celebrating Our Love</p>
<p className='text-[12px] mx-3'>Together with their families, Sylvie and Lucas invite you to join in the celebration of their love as they exchange vows and become one. Please join us on at our wedding for an evening of joy, love, and laughter as we begin our new journey.</p>
<p className='flex gap-5 my-5   justify-center'>

{/* <AiOutlineTwitter/> */}
{/* <FaFacebookF/> */}
{/* <AiFillInstagram/> */}

</p>
</div>

</div>
<div>
<img className='rounded-l-full lg:w-[510px] h-[300px] w-[110px] object-cover' src={image1} alt="" />
</div>


</div>
{/* <img className='absolute top-20 w-[550px] left-[450px] -rotate-12' src={image2} alt="" /> */}

</div>



      </>
  

    );
};

export default Section2;