// useImperativeHandle
import React, { useImperativeHandle, useRef } from 'react'
import ChildInput from './ChildInput'

function ParentInput() {
  const ref = useRef()
  useImperativeHandle()
  return (
    <>
      <ChildInput/>
    </>
  )
}

export default ParentInput

