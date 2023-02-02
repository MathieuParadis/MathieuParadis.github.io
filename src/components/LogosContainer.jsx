// REACT IMPORT
import React from 'react'

// DATA IMPORTS
import { logos } from '../data/Designs'

const LogosContainer = () => {
  return (
    <div className='logos-container d-flex flex-wrap justify-content-between align-items-center mb-3'>
      {logos.map((logo) => {
        return (
          <div className="logo-container col-12 col-sm-6 col-md-4 col-lg-3" key={logo.title}>
            <img src={logo.img} alt={logo.title} />
          </div>
        )
      })}
    </div>
  )
}

export default LogosContainer
