import React, { useState } from 'react'

function TypedValue() {
    const [text, setText] = useState("");
  return (
    <>
      <input type="text"  onChange={(e) => setText(e.target.value)} />
      <p>Type Text:{text}</p>
    </>
  )
}

export default TypedValue
