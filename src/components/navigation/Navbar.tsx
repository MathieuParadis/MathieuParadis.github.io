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
    <div className='flex justify-between py-[30px] px-[20px] md:px-[40px] lg:px-[50px] lg:my-0 lg:mx-[-45px]'>
      <div>
      <img className='cursor-pointer w-[60px]' src={darkMode ? logo_dark : logo} alt='MP logo' onClick={refreshPage} loading="lazy" />
      </div>
      <div className='flex justify-between'>
        <div className='nav-links hidden lg:flex items-center h-[50px] pr-4'>
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

