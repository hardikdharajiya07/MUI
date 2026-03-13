import React, { memo } from 'react'

function ChildCallback({data }) {
  return (
    <>
    <h1> this is child component</h1>
    
    </>
  )
}

export default memo(ChildCallback)
