import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function ChildInput(props, ref) {
    const inputRef= useRef()
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        }
    }))

  return (
    <>
      <input ref={inputRef} type='text' placeholder='Enter your input'/>
    </>
  )
}

export default forwardRef(ChildInput)
