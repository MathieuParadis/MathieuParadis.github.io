// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { NavLink } from 'react-router-dom'

const Archive = (): JSX.Element => {
  return (
    <div>
      <div>Archive page</div>
      <div className='flex'>
        <NavLink
          to={'/'}
          end={true}
        >
          2024
        </NavLink>
        <NavLink
          to={'/archive/2022'}
          end={true}
        >
          2022
        </NavLink>
      </div>
    </div>
  )
}

export default Archive
