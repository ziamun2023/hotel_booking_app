import React from 'react';
import Category from '../../allComponent/categories/Category';
import Rooms from '../../allComponent/rooms/Rooms';
import Banner from '../../allComponent/Banner/Banner';
import CountOnReserv from '../../allComponent/Banner/CountOnReserv';

const Home = () => {
    return (
        <>
 
            <Banner/>
            <CountOnReserv/>
           <Category/> 
           <Rooms></Rooms>
        </>
    );
};

export default Home;