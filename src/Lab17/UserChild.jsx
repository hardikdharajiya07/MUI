            // Store logged-in user details (name + email) in context, display them in child
            // components.
import React, { createContext,useContext, useEffect, useState } from 'react'
import { data } from './UserPerent';
function UserChild() {
    const Data=useContext(data);
  return (
    <div>
       <h1>{Data.name}</h1>
       <br/>
       <h2>{Data.email}</h2>
    </div>
  )
}
export default UserChild