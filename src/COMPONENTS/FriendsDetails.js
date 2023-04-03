import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FriendsDetails = () => {
  const friend = useLoaderData()
  const { name, email, username, address } = friend
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Address: {address.street}</p>
    </div>
  )
}

export default FriendsDetails
