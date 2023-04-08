import React from 'react'
import Speacial from './Speacial'

const Myself = ({ house }) => {
  return (
    <div className='children1'>
      Myself
      <p>house :{house}</p>
      <div>
        <Speacial house={house}></Speacial>
      </div>
    </div>
  )
}

export default Myself
