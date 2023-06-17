import React from 'react';
import { useCountUp } from 'use-count-up';

const RoomsAvailable = () => {
    const { value } = useCountUp({
      isCounting: true,
      end: 23500,
      duration: 4.2
    })
  
    return value
  }

export default RoomsAvailable;