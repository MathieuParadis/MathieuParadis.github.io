// REACT IMPORTS
import React, { useContext } from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

// COMPONENTS IMPORTS
import DarkModeBtn from '../DarkModeBtn'
import MobileNavigation from './MobileNavigation'

// CONTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// ASSETS IMPORTS
import logo from '../../assets/logos/logo.svg'
import logo_dark from '../../assets/logos/logo_dark.svg'

const Navigation = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)
  const location = useLocation()
  const navigate = useNavigate()

  const refreshPage = (): void => {
    if (location.pathname === '/') {
      window.location.reload()
    } else {
      navigate('/')
    }
  }

  return (
    <div className='navigation bg-red-500'>
      <div>
      <img className='logo' src={darkMode ? logo_dark : logo} alt='MP logo' onClick={refreshPage} loading="lazy" />
      </div>
      <div className='d-flex flex-row justify-content-between'>
        <div className='nav-links pe-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/designs'>Designs</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <DarkModeBtn />
        <MobileNavigation />
      </div>
    </div>
  )
}
export default Navigation

