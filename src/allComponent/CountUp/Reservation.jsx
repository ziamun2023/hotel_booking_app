import React, { useContext } from 'react';
import { useCountUp } from 'use-count-up';
import { AuthContext } from '../../providers/AuthProvider';

const Reservation = () => {
  const {role,user}=useContext(AuthContext )
    const { value } = useCountUp({
      isCounting: true,
      end: 58430,
      duration: 3.2
    })
  
    return value
  }


export default Reservation;