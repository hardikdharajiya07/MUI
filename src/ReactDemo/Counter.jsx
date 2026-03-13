import React, { useEffect, useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count)
    }, [count]);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  )
}

export default Counter
