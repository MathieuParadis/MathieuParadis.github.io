// REACT IMPORTS
import React, {  useContext } from 'react'

// CONTEXT IMPORTS
import DarkMode from './context/DarkMode'

// ASSETS IMPORTS
import sun from '../assets/images/sun.svg'
import sun_reverse from '../assets/images/sun_reverse.svg'
import moon from '../assets/images/moon.svg'
import moon_reverse from '../assets/images/moon_reverse.svg'

interface Props { 
  isMobile?: boolean
}

const DarkModeBtn = ({ isMobile = false }: Props): JSX.Element => {
  const { darkMode, setDarkMode } = useContext(DarkMode)

  if (isMobile) {
    return (
      <div className='dark-mode-btn-mobile d-flex align-items-center'>
        <input type='checkbox' className='' id='dark-mode-checkbox' checked={darkMode ? true : false} onChange={setDarkMode}/>
        <label htmlFor='dark-mode-checkbox'>
          <img className='dark-mode-logo' src={darkMode ? sun_reverse : moon_reverse} alt='Dark mode toggler button' loading="lazy" />
        </label>
      </div>
    )
  } else {
    return (
      <div className='dark-mode-btn d-flex align-items-center'>
        <input type='checkbox' className='' id='dark-mode-checkbox' checked={darkMode ? true : false} onChange={setDarkMode}/>
        <label htmlFor='dark-mode-checkbox'>
          <img className='dark-mode-logo' src={darkMode ? sun : moon} alt='Dark mode toggler button' loading="lazy" />
        </label>
      </div>
    )
  }
}

export default DarkModeBtn
