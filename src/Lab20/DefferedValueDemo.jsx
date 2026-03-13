import React, { useDeferredValue, useMemo, useState } from 'react'

function DefferedValueDemo() {
    const [deferredValue, setDeferredValue] = useState('')
    const deferred=useDeferredValue(deferredValue)
    const list=useMemo(() => {
        const result = []
        for (let i = 0; i < 5000; i++) {
            result.push(<div key={i}>Result for {deferred}</div>)
        }
        return result
    }, [deferred])
  return (
    <>
    <input value={deferredValue} onChange={(e) => setDeferredValue(e.target.value)} />

      {list}
    </>
  )
}
export default DefferedValueDemo
