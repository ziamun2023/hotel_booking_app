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
import { Parallax } from 'react-scroll-parallax';
const DynamicPage = () => {
    
    return (
      <div className='relative h-[1200px] my-20'>
        <Parallax speed={-50}>
        <img className='absolute top-[100px] w-[400px]' src={image1} alt="" />
        <img className='absolute top-[100px] right-0 w-[400px]' src={image2} alt="" />
        </Parallax>
     

          <div className='grid grid-cols-2 h-[600px] '>
          <div>
         
          </div>
          <div >
            <p className='text-[5px] text-gray-400   '>01</p>

           

          

          </div>
            
        </div>
      </div>
    );
};

export default DynamicPage;