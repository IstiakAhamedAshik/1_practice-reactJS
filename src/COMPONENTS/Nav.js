import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to='/' className='nave-name'>
          FIRST
        </NavLink>
        <NavLink to='/home' className='nave-name'>
          HOME
        </NavLink>
        <NavLink to='/form' className='nave-name'>
          FROM
        </NavLink>

        <NavLink to='/toggle' className='nave-name'>
          TOGGLE
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
