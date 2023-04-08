import React from 'react'
import { useContext } from 'react'
import { getContext } from '../Grandpa'

const Friend = () => {
  const [house, setHouse] = useContext(getContext)
  return (
    <div className='children1'>
      Friend
      <div>
        <p>gift :{house}</p>
        <button onClick={() => setHouse(house - 1)}>Decrese</button>
      </div>
    </div>
  )
}

export default Friend
