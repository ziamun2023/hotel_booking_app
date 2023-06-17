import React from 'react';
import { useCountUp } from 'use-count-up';

const Reservation = () => {
    const { value } = useCountUp({
      isCounting: true,
      end: 58430,
      duration: 3.2
    })
  
    return value
  }


export default Reservation;