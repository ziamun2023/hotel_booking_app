import React from 'react';
import honey from "../../assets/images/honeymoon.png"
import smoke from "../../assets/images/smokeflower.png"
import honeymoonplace from "../../assets/images/paris.jpg"

import honeymoonplace2 from "../../assets/images/brazil.jpg"
import honeymoonplace3 from "../../assets/images/german.jpg"
import honeymoonplace4 from "../../assets/images/german2.jpg"
import honeymoonplace5 from "../../assets/images/german3.jpg"
import honeymoonplace6 from "../../assets/images/german4.jpg"
import { Bounce, Fade } from 'react-awesome-reveal';
import CartHoneymoon from './CartHoneymoon';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Honeymoon = () => {
    return (
        <div className='relative mt-52 lg:h-[1200px] h-[2000px]'>
           <Fade delay={6}>
           <img className='absolute top-10' src={honey} alt="" />
           </Fade>
        <> <p data-aos="fade-up"
     data-aos-duration="3000" className='stylefont text-center lg:text-6xl pt-20 lg:pt-28'>  Best Honeymoon place</p></>
         <p className='text-[10px] text-center lg:text-[14px]  lg:mx-40 lg:mt-20 mt-4'>Discover the epitome of romance and tranquility with our curated selection of the best honeymoon places. Embark on a journey of love and bliss as you explore breathtaking destinations that set the perfect backdrop for your new chapter. From the idyllic beaches of Bora Bora where crystal-clear waters meet soft sands, to the charming streets of Paris adorned with timeless elegance, our collection caters to every couple's dream. </p>
         <div data-aos="fade-up" className='grid lg:grid-cols-3 lg:mt-40 mt-20 mx-20 gap-10 justify-items-center'>

          <CartHoneymoon   honeymoonplace={honeymoonplace} text={"Paris"} smoke={smoke}/>
          <CartHoneymoon  honeymoonplace={honeymoonplace2} text={"German"} smoke={smoke}/>
          <CartHoneymoon  honeymoonplace={honeymoonplace3} text={"Brazil"} smoke={smoke}/>
          <CartHoneymoon  honeymoonplace={honeymoonplace4} text={"Australia"} smoke={smoke}/>
          <CartHoneymoon  honeymoonplace={honeymoonplace5} text={"London"} smoke={smoke}/>
          <CartHoneymoon  honeymoonplace={honeymoonplace6} text={"Italy"} smoke={smoke}/>

         </div>
        </div>
    );
};

export default Honeymoon;