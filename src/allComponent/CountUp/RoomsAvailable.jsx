import React from 'react';
import { useCountUp } from 'use-count-up';

const RoomsAvailable = () => {
    const { value } = useCountUp({
      isCounting: true,
      end: 14890,
      duration: 4.2
    })
  
    return value
  }

export default RoomsAvailable;