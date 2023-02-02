// REACT IMPORTS
import React, { useState } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './ImgModal'

// DATA IMPORTS
import { logos } from '../data/Designs'

const LogosContainer = () => {
  const [display, setDisplay] = useState(false)
  const [img, setImg] = useState(null)

  const showOverlayContainer = (logo) => {
    const img = document.querySelector(`img#${logo.alt}`)
    const divBtn = document.querySelector(`div#${logo.alt}`)

    img.classList.add('blurr')
    divBtn.classList.remove('invisible')
  }

  const hideOverlayContainer = (logo) => {
    const img = document.querySelector(`img#${logo.alt}`)
    const divBtn = document.querySelector(`div#${logo.alt}`)

    img.classList.remove('blurr')
    divBtn.classList.add('invisible')
  }

  const displayImg = (img) => {
    setDisplay(true)
    setImg(img)
  }

  return (
    <>
      <ImgModal display={display} setDisplay={setDisplay} img={img}  />

      <div className='imgs-container d-flex flex-wrap justify-content-between align-items-center mb-3'>
        {logos.map((logo) => {
          return (
            <div 
              className="img-container col-12 col-sm-6 col-md-4 col-lg-3" 
              key={logo.alt}
              onMouseOver={() => {showOverlayContainer(logo)}}
              onMouseOut={() => {hideOverlayContainer(logo)}}
            >
              <img src={logo.url} alt={logo.title} id={logo.alt} />
              <div className='container-overlay d-flex justify-content-center align-items-center invisible' id={logo.alt}>
                <button onClick={() => displayImg(logo)}>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LogosContainer
