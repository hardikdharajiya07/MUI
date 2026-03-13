// Write a code in which parent component passes a memoized callback to a child
// that prints a message on click. (A)

import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'
import { Button } from '@mui/material'

function MemoizedCallback() {
    const [count, setCount] = useState(0)
    

  return (
    <>
    <h1>hii</h1>
        <ChildCallback  />
        <Button onClick={()=>setCount(count => count + 1)}>click</Button>
    </>
  )
}

export default MemoizedCallback
