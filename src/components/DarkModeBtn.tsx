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
      <div className='dark-mode-btn-mobile flex items-center'>
        <input
          id='dark-mode-checkbox'
          type='checkbox'
          checked={darkMode ? true : false}
          onChange={setDarkMode}
        />
        <label htmlFor='dark-mode-checkbox'>
          <img
            className='cursor-pointer transition transform hover:scale-110'
            src={darkMode ? sun_reverse : moon_reverse}
            alt='Dark mode toggler button'
            loading="lazy"
          />
        </label>
      </div>
    )
  } else {
    return (
      <div className='dark-mode-btn flex items-center'>
        <input
          id='dark-mode-checkbox'
          type='checkbox'
          checked={darkMode ? true : false}
          onChange={setDarkMode}
        />
        <label htmlFor='dark-mode-checkbox'>
          <img
            className='cursor-pointer transition transform hover:scale-110'
            src={darkMode ? sun : moon}
            alt='Dark mode toggler button'
            loading="lazy"
          />
        </label>
      </div>
    )
  }
}

export default DarkModeBtn
