import React from 'react';
import MainContainer from '../../allComponent/Shared/MainContainer';
import Header from '../../allComponent/header/Header';
import HeadSection from './HeadSection';
import Roominfo from './RoomInfo';
import ReserveDate from './ReserveDate';
import { useLoaderData, useParams } from 'react-router-dom';

const RoomDetails = () => {
    const Roomdata =useLoaderData()
    console.log(Roomdata)
    return (
        <MainContainer>
            
            <div className=' mx-auto'>

                <div className='grid lg:grid-cols-2  gap-6'>

<div className=' gap-10'>
<HeadSection Roomdata={Roomdata} />
<Roominfo  Roomdata={Roomdata}/>

</div>
<ReserveDate  Roomdata={Roomdata}/>
                </div>
            </div>
        </MainContainer>
    );
};

export default RoomDetails;