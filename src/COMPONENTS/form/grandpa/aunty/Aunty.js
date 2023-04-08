import React from 'react'
import Cousin from './Cousin'

const Aunty = ({ house }) => {
  return (
    <div className='children1'>
      Aunty
      <p>house : {house}</p>
      <div>
        <Cousin house={house}></Cousin>
      </div>
    </div>
  )
}

export default Aunty
