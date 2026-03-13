import React, { useState, useTransition } from 'react'

function DemoTransition() {
    const [data, setData] =useState('hello')
    const [isPending, startTransition] = useTransition()
    function change(newData){
        startTransition(() => {
      setData(newData);
    });
    }
  return (
    <div>
       <nav>
        <button onClick={() => change('home')}>Home</button>
        <button onClick={() => change('heavy-table')}>Heavy Table</button>
      </nav>

      {isPending && <p style={{ color: 'blue' }}>Loading new view...</p>}

      <div style={{ opacity: isPending ? 0.6 : 1 }}>
        {data}
      </div>
    </div>
  )
}

export default DemoTransition
