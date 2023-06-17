import React from 'react';
import MainContainer from '../Shared/MainContainer';
import { categorydata } from './categorydata';
import CategoryBox from './CategoryBox';
const Category = () => {
    return (
        <MainContainer>
          <div className='pt-4  flex flex-row items-center justify-between  overflow-x-auto'>

            {categorydata.map(item=><CategoryBox label={item.label} icon={item.icon} key={item.label}></CategoryBox>)}
          </div>
        </MainContainer>
    );
};

export default Category;