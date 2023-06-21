import React from 'react';
import Header from '../../allComponent/header/Header';

const HeadSection = ({Roomdata}) => {
    return (
        <div>
            <Header title={Roomdata.title}
subtitle={Roomdata.location}/>
<div>
    <img className='rounded-2xl' src={Roomdata.image} alt="" />
</div>
        </div>
    );
};

export default HeadSection;