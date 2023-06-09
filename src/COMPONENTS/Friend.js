import React from 'react'
import { Link } from 'react-router-dom'

const Friend = (props) => {
  const { id, name, username } = props.friend
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid black' }}>
      <h3>Name:{name}</h3>

      <Link to={`/friend/${id}`}>
        <button>{username}</button>
      </Link>
    </div>
  )
}

export default Friend
