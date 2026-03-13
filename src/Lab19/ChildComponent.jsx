// Write a code which Add items using memoized addItem handler passed to child
// component from the parent component, make sure child does not re-render
// unnecessarily. (A)
import React from 'react'

function ChildComponent({ addItem }) {
  return (
    <>
      <button onClick={addItem}>Add Item</button>
      
    </>
  )
}

export default ChildComponent
