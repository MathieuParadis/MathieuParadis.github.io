// REACT IMPORTS
import React, {  useContext } from 'react'

// CONTEXT IMPORTS
import DarkMode from './context/DarkMode'

// ASSETS IMPORTS
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'

const DarkModeBtn = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode)

  return (
    <div className='dark-mode-btn d-flex align-items-center'>
      <input type='checkbox' className='' id='dark-mode-checkbox' checked={darkMode ? true : false} onChange={setDarkMode}/>
      <label htmlFor='dark-mode-checkbox'><img className='darkmode-logo' src={darkMode ? sun : moon} alt='Dark mode toggler button' /></label>
    </div>
  )
}

export default DarkModeBtn
