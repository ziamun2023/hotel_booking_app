import React from 'react';
import logoimg from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const NavImage = () => {
    return (
     <Link to={'/'}> <img className='w-14 hidden md:block lg:block cursor-pointer' src={logoimg} alt="" /></Link>
    );
};

export default NavImage;