import React from 'react';
import { useCountUp } from 'use-count-up';

const CountriesCount = () =>{
    const { value } = useCountUp({
      isCounting: true,
      end: 40,
      duration: 6.2
    })
  
    return value
  }

export default CountriesCount;