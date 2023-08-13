import React from 'react';
import winter from '../../assets/images/winter.jpg'
import MainContainer from '../Shared/MainContainer';
const SectionWinter = () => {
    return (
        <div className=''>
           <>
            <div className='grid lg:grid-cols-3 justify-center my-auto'>
                <div className='col-span-1'>
                    <img className='w-[400px]  rounded-lg' src={winter} alt="" />
                </div>
                <div className='col-span-2 my-auto'>
                <p className=  'text-black font-bold text-5xl '>Autumn/Winter Weddings</p>
                <p className=' text-2xl mt-20'>
        ‘A warm & inviting welcome awaits’.
        </p>
            <p className='text-black'>

Imagine windows softly lit, roaring fire in the entrance hall and a glass of warmed mulled punch! The Palace has something to offer all year round, especially in Winter.

The gardens remain beautifully kept, with an array of colours in the trees and borders to hold interest. The crystal-clear waters of the moat and waterfall are a truly magical sight.</p>
<button className='bg-gray-700 text-white rounded-lg px-2 py-5 mt-10'>Book for Winter</button>
                </div>
            </div></>
     
        </div>
    );
};

export default SectionWinter;