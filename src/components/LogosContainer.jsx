// REACT IMPORTS
import React, { useState } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './ImgModal'

// DATA IMPORTS
import { logos } from '../data/Designs'

const LogosContainer = () => {
  const [display, setDisplay] = useState(true)
  const [img, setImg] = useState(null)

  return (
    <>
      <ImgModal display={display} setDisplay={setDisplay} img={logos[0]}  />

      <div className='logos-container d-flex flex-wrap justify-content-between align-items-center mb-3'>
        {logos.map((logo) => {
          return (
            <div className="logo-container col-12 col-sm-6 col-md-4 col-lg-3" key={logo.title}>
              <img src={logo.url} alt={logo.title} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LogosContainer
