// useMemo
import React, { useState, useMemo } from 'react';

export const Factorial = () => {
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    console.log("Running expensive math...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); 

  return (
    <div >
      <h1>Factorial of {number} is: {factorial}</h1>
      
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

    </div>
  );
};
