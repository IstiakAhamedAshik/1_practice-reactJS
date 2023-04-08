import React, { useContext } from 'react'
import { getContext } from '../Grandpa'
const Speacial = () => {
  const [house, setHouse] = useContext(getContext)
  return (
    <div className='children1'>
      Speacial
      <div>
        <p>gift :{house}</p>
        <button onClick={() => setHouse(house + 1)}>Increase</button>
      </div>
    </div>
  )
}

export default Speacial
