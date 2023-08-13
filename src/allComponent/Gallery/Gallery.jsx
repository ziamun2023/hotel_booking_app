import React from 'react';
import img from "../../assets/images/bannerphoto1.png"
import couple1 from '../../assets/images/couple11.jpg'
import couple2 from '../../assets/images/couple22.jpg'
import couple3 from '../../assets/images/couple33.jpg'
import couple4 from '../../assets/images/couple44.jpg'
import couple5 from '../../assets/images/couple55.jpg'
import couple6 from '../../assets/images/couple66.jpg'
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
    return (
        <div className='relative  lg:h-[1200px] h-[1600px] bg-[rgb(248,249,251)] '>
            <img className='absolute top-0 z-10' src={img} alt="" />
            <p className='absolute top-[370px] z-20  text-5xl stylefont font-semibold'>Your favourite location</p>
            <p className='text-center stylefont text-6xl pt-10'>Gallery</p>
            <p className='text-center stylefont text-4xl'>Make memories in your favourite place</p>
            <div className=' z-10 grid lg:grid-cols-3 mx-20 my-10 gap-10 justify-items-center'>
                <div data-aos="zoom-in-up"   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className=' '>
                   < > <img className='w-[700px] h-[400px] object-cover' src={couple1}  alt="" /></>
                </div>
                <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"  data-aos="zoom-in-up" className=''>
                   <>
                   <img className='w-[700px] h-[400px] object-cover' src={couple2} alt="" />
                   </>
                </div>
                <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-easing="ease-in-out" data-aos="zoom-in-up"  className=''>
                    <><img className='w-[700px] h-[400px] object-cover' src={couple3} alt="" /></>
                </div>
                

            </div>
            <div className=' mx-40 z-10 grid lg:grid-cols-2 gap-10 justify-items-center'>
                <div data-aos="zoom-in-up"   className=' '>
                   <>
                   <img className='lg:w-[700px] w-[5oopx]  lg:h-[400px] object-cover' src={couple4} alt="" />
                   </>
                </div>
                <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="zoom-in-up"  className=''>
                   <>
                   <img className='lg:w-[700px] w-[5oopx]  lg:h-[400px] object-cover' src={couple5} alt="" />
                   </>
                </div>
                
                

            </div>
            
        </div>
    );
};

export default Gallery;