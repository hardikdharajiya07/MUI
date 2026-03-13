import React, { useDebugValue, useState } from 'react'

function useToggle() {
  const[toggle,setToggle]=useState(false)

  function change(){
    setToggle(!toggle)
  }
  useDebugValue(toggle?'ON':'OFF')
  return {toggle,change}
}

export default useToggle
