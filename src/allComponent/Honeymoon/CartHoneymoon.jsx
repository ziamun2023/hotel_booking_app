import React from 'react';
import { BsFillSearchHeartFill } from 'react-icons/Bs';
const CartHoneymoon = ({smoke,honeymoonplace,text}) => {
    return (
        <div className='relative group lg:h-[400px] h-[200px]   rounded-md overflow-hidden w-[200px] lg:w-[400px]'>
        <img className=' lg:h-[400px] h-[200px] w-[200px] lg:w-[400px] object-cover absolute group-hover:opacity-0 duration-300 z-10 opacity-100 top-0' src={smoke} alt="" />
        <img className='lg:h-[400px] h-[200px] group-hover:scale-125 duration-700  w-[200px] lg:w-[400px] object-cover' src={honeymoonplace} alt="" />
<div className='lg:h-[400px] h-[200px] w-[200px] lg:w-[400px] grid justify-items-center absolute top-0 bg-black z-30 opacity-0 group-hover:opacity-50 duration-300'>
    <p className=' text-white my-auto'><BsFillSearchHeartFill size={50}/></p>
    <p className=' text-white   text-6xl'>{text}</p>
</div>
    </div>
    );
};

export default CartHoneymoon;