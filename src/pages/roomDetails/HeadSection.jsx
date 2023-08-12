import React from 'react';
import Header from '../../allComponent/header/Header';

const HeadSection = ({dataOFdestination}) => {
    return (
        <div>
            <Header title={dataOFdestination.title}
subtitle={dataOFdestination.location}/>
<div>
    <img className='rounded-2xl' src={dataOFdestination.image} alt="" />
</div>
        </div>
    );
};

export default HeadSection;