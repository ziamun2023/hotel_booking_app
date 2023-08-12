import React, { useEffect, useState } from 'react';
import image3 from "../../assets/images/flowerimage1.jpg"
import image1 from "../../assets/images/couple2.jpg"
import image2 from "../../assets/images/flower5.png"
import { Parallax } from 'react-scroll-parallax';
// import {AiOutlineTwitter} from 'react-icons/Ai';
// import {AiFillInstagram} from 'react-icons/Ai';
// import {FaFacebookF} from 'react-icons/Fa';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Section2 = () => {


    return (
  <div className='relative' >

    <div className='grid grid-cols-3 '>
  <div>
  <Parallax dir='right' speed={-23}>
     <img className='w-[300px] rounded-r-full object-cover' src={image3} alt="" />
    </Parallax>
  </div>
  <div  data-aos="fade-up"
     data-aos-duration="3000" > 
 <div>
 <p className='stylefont text-6xl text-center my-10'>Join Us in Celebrating Our Love</p>
    <p className='text-[12px]'>Together with their families, Sylvie and Lucas invite you to join in the celebration of their love as they exchange vows and become one. Please join us on at our wedding for an evening of joy, love, and laughter as we begin our new journey.</p>
    <p className='flex gap-5 my-5   justify-center'>
    
    {/* <AiOutlineTwitter/> */}
    {/* <FaFacebookF/> */}
    {/* <AiFillInstagram/> */}
    
    </p>
 </div>

  </div>
  <div>
    <img className='rounded-l-full' src={image1} alt="" />
  </div>
  

    </div>
<img className='absolute top-20 w-[550px] left-[450px] -rotate-12' src={image2} alt="" />

  </div>



    );
};

export default Section2;