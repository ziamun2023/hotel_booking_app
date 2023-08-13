import React from 'react';
import MainContainer from '../Shared/MainContainer';
import { categorydata } from './categorydata';
import CategoryBox from './CategoryBox';
const Category = () => {
    return (
        <>
          <div className='pt-4 h-[800px]  border-2 rounded-md hideScroll overflow-y-scroll  col-span-1  lg:col-span-1'>

            {categorydata.map(item=><CategoryBox label={item.label} icon={item.icon} key={item.label}></CategoryBox>)}
          </div>
        </>
    );
};

export default Category;