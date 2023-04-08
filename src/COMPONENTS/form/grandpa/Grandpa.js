import React, { createContext, useState } from 'react'
import './grandpa.css'
import Father from './father/Father'
import Uncle from './Uncle'
import Aunty from './aunty/Aunty'
export const getContext = createContext()
export const getName = createContext()
const Grandpa = () => {
  const [house, setHouse] = useState(1)
  let name = 'MY NAME IS ASHIK'
  return (
    <getContext.Provider value={[house, setHouse]}>
      <getName.Provider value={name}>
        {' '}
        <div className='root'>
          <h3 style={{ textAlign: 'center' }}> Grandpa</h3>
          <p>House : {house}</p>
          <div className='children'>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </div>
        </div>
      </getName.Provider>
    </getContext.Provider>
  )
}

export default Grandpa
