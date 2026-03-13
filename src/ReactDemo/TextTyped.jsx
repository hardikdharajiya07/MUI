import React, { useState } from 'react'

function TextTyped() {
    const [text, setText] = useState("");
  return (
    <>
      <input type="text"  onChange={(e) => setText(e.target.value)} />
      <p>Type Text:{text}</p>
    </>
  )
}

export default TextTyped
