// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

// COMPONENTS IMPORTS
import MobileNavigation from './MobileNavigation'

// ASSETS IMPORTS
import logo from '../../assets/logos/logo.svg'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const refreshPage = () => {
    if (location.pathname === '/') {
      window.location.reload()
    } else {
      navigate('/')
    }
  }

  return (
    <div className='navigation bg-red-500'>
      <div>
        <img className='logo' src={logo} alt='MP logo' onClick={refreshPage} />
      </div>
      <div className='d-flex flex-row justify-content-between'>
        <div className='nav-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/designs'>Designs</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <MobileNavigation />
      </div>
    </div>
  )
}
export default Navigation

