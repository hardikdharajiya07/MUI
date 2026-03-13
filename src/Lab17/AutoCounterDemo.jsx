import React, { useEffect, useState } from 'react'

function AutoCounterDemo() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


  return (
    <>
      <div>Count: {count}</div>
    </>
  )
}

export default AutoCounterDemo
