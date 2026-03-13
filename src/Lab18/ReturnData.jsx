import React from 'react'
import useFetch from './useFetch'

function ReturnData() {
    const data=useFetch('https://jsonplaceholder.typicode.com/users')  
  return (
    <>
      {data.map((user) => (
        <ul>
            <li>{user.id}</li>
            <li>{user.name}</li>    
            <li>{user.username}</li>
            <li>{user.email}</li>   
            <li>{user.address.street}</li>         
            <li>{user.address.suite}</li>         
            <li>{user.address.city}</li>         
            <li>{user.address.zipcode}</li>         
            
        </ul>
      ))}
    </>
  )
}

export default ReturnData
