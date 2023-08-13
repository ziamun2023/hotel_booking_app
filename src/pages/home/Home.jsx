import React, { useEffect } from 'react';
import Category from '../../allComponent/categories/Category';
// import Rooms from '../../allComponent/rooms/Rooms';
import Banner from '../../allComponent/Banner/Banner';
import CountOnReserv from '../../allComponent/Banner/CountOnReserv';
import SectionWinter from '../../allComponent/sectionWinter.jsx/SectionWinter';
import MostPopular from '../../allComponent/sectionWinter.jsx/MostPopular';
import Alldestination from '../../allComponent/rooms/Alldestination';
import Section2 from '../../allComponent/Section2.jsx/Section2';
import DynamicPage from '../../allComponent/Dynamic/DynamicPage';
import Gallery from '../../allComponent/Gallery/Gallery';
import Honeymoon from '../../allComponent/Honeymoon/Honeymoon';
import SendMessage from '../../allComponent/SendMessage/SendMessage';


const Home = () => {
  
    return (
        <>
 {/* <audio src={audio2} autoplay="autoplay" loop="loop"></audio> */}
            <Banner/>
         
         
            {/* <CountOnReserv/> */}
         
          {/* <MostPopular/> */}
          <Section2/>
          <DynamicPage/>
          <Gallery/>
          <Honeymoon/>
          <div className='grid grid-cols-3 lg:grid-cols-5'>
          <Category/> 
      <div className='lg:col-span-4   md:h-[700px] lg:h-[800px] h-[700px] mb-20 hideScroll overflow-y-scroll col-span-2'>
      {/* <Rooms></Rooms> */}
      <Alldestination/>

      </div>
          </div>
          <SendMessage/>
           <SectionWinter/>
     

        </>
    );
};

export default Home;