// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink } from 'react-router-dom'

// DATA IMPORTS
import { routes } from '../../data/routes'

const Navigation = (): JSX.Element => {
  return (
    <div className='flex justify-between py-[30px] px-[15px] md:px-[30px] lg:px-[45px]'>
      <div>
      </div>
      <div className='flex justify-between'>
        <div className='nav-links hidden lg:flex items-center h-[50px] pr-4'>
          {routes.map((route): JSX.Element => {
            return <NavLink key={route.id} to={route.path} end>{route.title}</NavLink>
          })}
        </div>
      </div>
    </div>
  )
}
export default Navigation

