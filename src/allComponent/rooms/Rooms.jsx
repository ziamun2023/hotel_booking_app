// import { Container } from 'postcss';
import React, { useEffect, useState } from 'react';
import MainContainer from '../Shared/MainContainer';
import Card from './Card';
import Loader from '../Shared/loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../heading/Heading';

const Rooms = () => {


    const [params,setParams]=useSearchParams()
    const  category=params.get('category')
    const [rooms,setRooms]=useState([])
    const [loading,setLoading]=useState(false)
    // console.log(params)
  
    useEffect(()=>{
        setLoading(true)
        fetch('../../../public/rooms.json')
        .then(res=>res.json())
        .then(data=>{ 
            if(category){
                const filtered=data.filter(room=>room.category===category)
                setRooms(filtered)
            }
            else{      setRooms(data)}
      
        
            setLoading(false)})
        .catch(err=>console.log(err))
    },[category])

    if(loading){
        return <Loader></Loader>
    }
    return (
        <MainContainer>
       {rooms && rooms.length >0?   <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            {rooms.map((room,index)=><Card key={index} room={room}>  </Card>)}
         </div>:  <div className='pt-12'>
            <Heading
             title='no rooms available'
             subtitle="please select other categories"
             center={true}></Heading>
    
            </div>}
        </MainContainer>
    );
};

export default Rooms;