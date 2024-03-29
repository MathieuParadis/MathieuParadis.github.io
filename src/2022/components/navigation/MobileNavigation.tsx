// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink } from 'react-router-dom'

// COMPONENTS IMPORTS
import DarkModeBtn from '../DarkModeBtn'

// DATA IMPORTS
import { routes } from '../../data/routes'

const MobileNavigation = (): JSX.Element => {
  const handleMenu = (): void => {
    document.querySelector?.('.span1')?.classList.toggle('clicked')
    document.querySelector?.('.span2')?.classList.toggle('clicked')
    document.querySelector?.('.span3')?.classList.toggle('clicked')
    document.querySelector?.('.menu')?.classList.toggle('clicked')
    document.querySelector?.('body')?.classList.toggle('clicked')
  }

  return (
    <div>
      <div className='hamburger-box' onClick={handleMenu}>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
      </div>
      <div className='menu'>
        {routes.map((route): JSX.Element => {
          return (
            <NavLink
              key={route.id}
              to={route.path}
              className='menu-link'
              onClick={handleMenu}
              end={true}
            >
              {route.title}
            </NavLink>
          )
        })}
        <DarkModeBtn isMobile={true} />
      </div>
    </div>
  )
}

export default MobileNavigation
