import React from 'react';
import MainContainer from '../../allComponent/Shared/MainContainer';
import Header from '../../allComponent/header/Header';
import HeadSection from './HeadSection';
import Roominfo from './RoomInfo';
import ReserveDate from './ReserveDate';

const RoomDetails = () => {
    return (
        <MainContainer>
            
            <div className='max-w-screen-lg mx-auto'>

                <div className='flex flex-col gap-6'>
<HeadSection/>
<div className='grid lg:grid-cols-2 gap-10'>
<div><Roominfo/></div>
<div>
 <ReserveDate/>
</div>
</div>
                </div>
            </div>
        </MainContainer>
    );
};

export default RoomDetails;