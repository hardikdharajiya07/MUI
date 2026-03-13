// useFormStatus

import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const { pending } = useFormStatus()
  return (
    <>
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </>
  )
}

async function handleSubmit() {
 await new Promise(resolve => setTimeout(resolve, 3000))
}

function Submitting() {
  return (
    <div>
        <h3>Program A : Disable Button </h3>
      <form action={handleSubmit}>
        <input type='text' placeholder='Enter your input'/>
        <SubmitButton />
      </form>
    </div>
  )
}

export default Submitting
