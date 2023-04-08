import React, { useContext } from 'react'
import { getName } from './Grandpa'

const Uncle = ({ house }) => {
  let name = useContext(getName)
  return (
    <div className='children1'>
      Uncle
      <p>house :{house}</p>
      <h5>Name : {name}</h5>
    </div>
  )
}

export default Uncle
