import React, { useState } from 'react'

function ParagraphHide() {
    const [show, setShow] = useState(true);
  return (
    <>
      {show && <p>This paragraph is hidden or shown based on the state.</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  )
}

export default ParagraphHide
