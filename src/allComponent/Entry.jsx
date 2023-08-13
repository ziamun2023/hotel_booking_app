import React from 'react';
import { Link } from 'react-router-dom';
import sound from '../assets/images/y2mate.com - Phule Phule Dhole Dhole  Rabindra Sangeet  Instrumental  Piano Cover.mp3'

const Entry = () => {
    const play=()=>{
        new Audio(sound).play()
    }
    return (
        <div className='grid justify-items-center'>
            <p>start with music?</p>
        <Link to='/'>
        <p onClick={play}>yes</p></Link>
<Link to='/'>
<p>no</p>  </Link>     </div>
    );
};

export default Entry;