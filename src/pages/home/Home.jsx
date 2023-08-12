import React from 'react';
import Category from '../../allComponent/categories/Category';
// import Rooms from '../../allComponent/rooms/Rooms';
import Banner from '../../allComponent/Banner/Banner';
import CountOnReserv from '../../allComponent/Banner/CountOnReserv';
import SectionWinter from '../../allComponent/sectionWinter.jsx/SectionWinter';
import MostPopular from '../../allComponent/sectionWinter.jsx/MostPopular';
import Alldestination from '../../allComponent/rooms/Alldestination';
import Section2 from '../../allComponent/Section2.jsx/Section2';
import DynamicPage from '../../allComponent/Dynamic/DynamicPage';

const Home = () => {
    return (
        <>
 
            <Banner/>
         
            {/* <CountOnReserv/> */}
         
          {/* <MostPopular/> */}
          <Section2/>
          <DynamicPage/>
          <div className='grid grid-cols-3 lg:grid-cols-5'>
          <Category/> 
      <div className='lg:col-span-4   md:h-[700px] lg:h-[800px] h-[700px] mb-20 hideScroll overflow-y-scroll col-span-2'>
      {/* <Rooms></Rooms> */}
      <Alldestination/>
      </div>
          </div>
           <SectionWinter/>
     

        </>
    );
};

export default Home;