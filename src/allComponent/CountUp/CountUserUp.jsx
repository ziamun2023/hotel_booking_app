import React from 'react';
import { useCountUp } from 'use-count-up'
const CountUserUp = () => {
    const { value } = useCountUp({
      isCounting: true,
      end: 720,
      duration: 3.2
    })
  
    return value
  }

export default CountUserUp;