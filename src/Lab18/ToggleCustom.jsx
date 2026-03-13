import React from 'react'
import useToggle from './useToggle'

function ToggleCustom() {
    const {toggle,change}=useToggle()
  return (
    <>
        <h1>{toggle?'True':'False'}</h1>
      <button onClick={change}>Change</button>
    </>
  )
}

export default ToggleCustom
