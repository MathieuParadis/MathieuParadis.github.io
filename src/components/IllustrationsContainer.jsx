// REACT IMPORTS
import React, { useState } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './ImgModal'

// DATA IMPORTS
import { illustrations } from '../data/Designs'

const IllustrationsContainer = () => {
  const [display, setDisplay] = useState(false)
  const [img, setImg] = useState(null)

  const showOverlayContainer = (illustration) => {
    const img = document.querySelector(`img#${illustration.alt}`)
    const divBtn = document.querySelector(`div#${illustration.alt}`)

    img.classList.add('blurr')
    divBtn.classList.remove('invisible')
  }

  const hideOverlayContainer = (illustration) => {
    const img = document.querySelector(`img#${illustration.alt}`)
    const divBtn = document.querySelector(`div#${illustration.alt}`)

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
        {illustrations.map((illustration) => {
          return (
            <div 
              className="img-container col-12 col-sm-6 col-md-4 col-lg-3" 
              key={illustration.alt}
              onMouseOver={() => {showOverlayContainer(illustration)}}
              onMouseOut={() => {hideOverlayContainer(illustration)}}
            >
              <img src={illustration.url} alt={illustration.title} id={illustration.alt} />
              <div className='container-overlay d-flex justify-content-center align-items-center invisible' id={illustration.alt}>
                <button onClick={() => displayImg(illustration)}>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default IllustrationsContainer
