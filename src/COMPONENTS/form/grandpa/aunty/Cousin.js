import React from 'react'
import Friend from './Friend'

const Cousin = ({ house }) => {
  return (
    <div className='children1'>
      Cousin
      <p>house :{house}</p>
      <div>
        <Friend house={house}></Friend>
      </div>
    </div>
  )
}

export default Cousin
