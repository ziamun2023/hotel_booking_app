import React from 'react';
import MainContainer from '../MainContainer';
import NavImage from './NavImage';
import Search from './Search';
import MenuDropdown from './MenuDropdown';
import CountUserUp from '../../CountUp/CountUserUp';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
 <MainContainer>
     <div className='flex flex-row items-center  justify-between gap-3 md:gap-0'>

        <div>
            <NavImage/>
        </div>
        <div>
            <CountUserUp/>  
        </div>
        <div>
            <Search/>
        </div>
        <div>
            <MenuDropdown/>
        </div>
     </div>
 </MainContainer>
            </div>
            
        </div>
    );
};

export default Navbar;