import React from 'react';
import image1 from "../../assets/images/couple2.jpg"
import image2 from "../../assets/images/flower6.png"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { Parallax, useParallax } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const DynamicPage = () => {
    
    return (
      <div className='relative  h-[1300px] my-20 overflow-hidden'>
        <Parallax  speed={-60}>
        <img className='absolute rounded-r-full top-[100px] w-[200px] lg:w-[400px]' src={image1} alt="" />
        <img className='absolute top-[100px] right-0 w-[400px]' src={image2} alt="" />
        </Parallax>
     

          <div className='grid grid-cols-2 h-[600px] '>
          <div>
         
          </div>
          <div >
        <Fade>
        <p className='lg:text-[120px] text-[60px] font-thin text-gray-400   '>01</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea similique tenetur!</p>
            <p className='stylefont text-2xl lg:text-5xl'>Our Dream Wedding Location in the Park</p>
            <p className='my-2'>Our wedding location is a dream come true. Set in the heart of the countryside, it offers breathtaking views of rolling hills, lush greenery, and a serene lake that sparkles in the sunlight. The venue itself is a beautiful combination of rustic charm and modern elegance.

From the exposed wooden beams to the sparkling chandeliers, it offers the perfect backdrop for our special day. The outdoor ceremony area is surrounded by towering trees and provides a natural and romantic setting for us to exchange our vows.</p>


<p className='border-2 border-black py-2 px-3 rounded-2xl w-[150px] text-center hover:bg-blue-200 duration-500 hover:shadow-xl'>See places</p>
        </Fade>

    

    <div data-aos="fade-up"
     data-aos-duration="3000" className='mt-40'>
        <p className='lg:text-[120px] text-[60px] font-thin text-gray-400   '>02</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea similique tenetur!</p>
            <p className='stylefont text-2xl lg:text-5xl'>Our Dream Wedding Location in the Park</p>
            <p className='my-2'>Our wedding location is a dream come true. Set in the heart of the countryside, it offers breathtaking views of rolling hills, lush greenery, and a serene lake that sparkles in the sunlight. The venue itself is a beautiful combination of rustic charm and modern elegance.

From the exposed wooden beams to the sparkling chandeliers, it offers the perfect backdrop for our special day. The outdoor ceremony area is surrounded by towering trees and provides a natural and romantic setting for us to exchange our vows.</p>


<p className='border-2 border-black py-2 px-3 rounded-2xl w-[150px] text-center hover:bg-blue-200 duration-500 hover:shadow-xl'>See places</p>
        </div>

          

          </div>
            
        </div>
      </div>
    );
};

export default DynamicPage;