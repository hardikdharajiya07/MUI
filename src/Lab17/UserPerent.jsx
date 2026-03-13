import React, { createContext, useEffect, useState } from 'react'
import UserChild from './UserChild';

export const data=createContext();

function UserPerent() {
  const userData={
    name:"Hardik",
    email:"Hardik@example.com"
  };
  return (
    <data.Provider value={userData}>
        <UserChild/>
    </data.Provider>
  )
}
export default UserPerent