import React from 'react'
import Myself from './Myself'
import Brother from './Brother'
import Sister from './Sister'

const Father = ({ house }) => {
  return (
    <div className='children1'>
      Father
      <p>house : {house}</p>
      <div className='children'>
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  )
}

export default Father
