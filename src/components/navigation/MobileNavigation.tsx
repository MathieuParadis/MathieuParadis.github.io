// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  const handleMenu = () => {
    document.querySelector?.('.span1')?.classList.toggle('clicked')
    document.querySelector?.('.span2')?.classList.toggle('clicked')
    document.querySelector?.('.span3')?.classList.toggle('clicked')
    document.querySelector?.('.menu')?.classList.toggle('clicked')
    document.querySelector?.('body')?.classList.toggle('clicked')
  }

  return (
    <div className=''>
      <div className='hamburger-box' onClick={handleMenu}>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
      </div>
      <div className='menu'>
        <NavLink className='menu-link' to='/' onClick={handleMenu}>Home</NavLink>
        <NavLink className='menu-link' to='/projects' onClick={handleMenu}>Projects</NavLink>
        <NavLink className='menu-link' to='/designs' onClick={handleMenu}>Designs</NavLink>
        <NavLink className='menu-link' to='/resume' onClick={handleMenu}>Resume</NavLink>
      </div>
    </div>
  )
}

export default MobileNavigation
