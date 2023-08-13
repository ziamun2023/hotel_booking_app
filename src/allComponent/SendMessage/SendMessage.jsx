import React from 'react';
import flower from "../../assets/images/flowermessage.png"
import flower2 from "../../assets/images/roundedflower.png"
import image from "../../assets/images/couple55.jpg"
import image2 from "../../assets/images/couple44.jpg"
const SendMessage = () => {
    return (
        <div className='grid grid-cols-2'> 
            <div className='relative'>
                <img className='w-[400px] h-[400px] absolute top-20 left-20 object-cover rounded-2xl' src={image} alt="" />
                <img className='w-[400px] h-[400px] object-cover rounded-2xl absolute top-40 left-40' src={image2} alt="" />
                <img className='w-[300px] rounded-2xl absolute top-52 left-0' src={flower} alt="" />



            </div>
            <div className=' h-[600px] w-[600px] relative'>
                <img className='absolute top-0 h-[600px] w-[600px]' src={flower2} alt="" />
                <div className='grid justify-items-center'>
                 <p className='text-center stylefont lg:text-6xl lg:mt-20'> Contact us</p>
                 <input type="text" placeholder="Enter your email" className='border-2 py-3 px-5 rounded-md border-gray-500 bg-white' />
                 <input type="text" placeholder="Enter number" className='border-2 py-3 mt-5 px-5 rounded-md border-gray-500 bg-white' />
                 <input type="text" placeholder="Program name" className='border-2 py-3 mt-5 px-5 rounded-md border-gray-500 bg-white' />
                 <input type="text" placeholder="Message" className='border-2 py-8 mt-5 px-5 rounded-md border-gray-500 bg-white' />
                 <input type="text" placeholder="Send" className='border-2 py-3 text-center mt-5 px-5 rounded-md border-gray-500 bg-blue-200' />

                </div>

            </div>
            
        </div>
    );
};

export default SendMessage;