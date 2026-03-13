import React, { createContext, useContext, useState } from 'react'
function SHook1() {
   
  return (
    <>
      <SHook2 />

    </>

  )
}
function SHook2() {
   const name1=useContext(name)
  return (
    <>
      
        <h1>{name1}</h1>
    </>

  )
}
const name=createContext()

function SampleHook() {
const n='hardik'
  return (
    <>
    <name.Provider value={n}>
      <SHook1/>
      </name.Provider>

    </>

  )
}

export default SampleHook
