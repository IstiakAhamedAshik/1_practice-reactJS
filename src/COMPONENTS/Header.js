import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='nave' style={{ backgroundColor: 'cadetblue' }}>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Header
