import React from 'react';
import MainContainer from '../../allComponent/Shared/MainContainer';
import Header from '../../allComponent/header/Header';
import HeadSection from './HeadSection';
import DestinationInfo from './DestinationInfo';
import ReserveDate from './ReserveDate';
import { useLoaderData, useParams } from 'react-router-dom';

const DestinationDetails = () => {
    const dataOFdestination =useLoaderData()
    console.log(dataOFdestination)
    return (
        <MainContainer>
            
            <div className=' mx-auto'>

                <div className='grid lg:grid-cols-2  gap-6'>

<div className=' gap-10'>
<HeadSection dataOFdestination={dataOFdestination} />
<DestinationInfo  dataOFdestination={dataOFdestination}/>

</div>
<ReserveDate  dataOFdestination={dataOFdestination}/>
                </div>
            </div>
        </MainContainer>
    );
};

export default DestinationDetails;