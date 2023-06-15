// import { Container } from 'postcss';
import React, { useEffect, useState } from 'react';
import MainContainer from '../Shared/MainContainer';
import Card from './Card';
import Loader from '../Shared/loader/Loader';

const Rooms = () => {
    const [rooms,setRooms]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('../../../public/rooms.json')
        .then(res=>res.json())
        .then(data=>{
            
            setRooms(data)
            setLoading(false)})
        .catch(err=>console.log(err))
    },[])

    if(loading){
        return <Loader></Loader>
    }
    return (
        <MainContainer>
         <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            {rooms.map((room,index)=><Card key={index} room={room}>  </Card>)}
         </div>
        </MainContainer>
    );
};

export default Rooms;