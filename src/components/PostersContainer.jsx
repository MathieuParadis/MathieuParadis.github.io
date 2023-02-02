// REACT IMPORTS
import React, { useState } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './ImgModal'

// DATA IMPORTS
import { posters } from '../data/Designs'

const PostersContainer = () => {
  const [display, setDisplay] = useState(false)
  const [img, setImg] = useState(null)

  const showOverlayContainer = (poster) => {
    const img = document.querySelector(`img#${poster.alt}`)
    const divBtn = document.querySelector(`div#${poster.alt}`)

    img.classList.add('blurr')
    divBtn.classList.remove('invisible')
  }

  const hideOverlayContainer = (poster) => {
    const img = document.querySelector(`img#${poster.alt}`)
    const divBtn = document.querySelector(`div#${poster.alt}`)

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
        {posters.map((poster) => {
          return (
            <div 
              className="img-container col-12 col-sm-6 col-md-4 col-lg-3" 
              key={poster.alt}
              onMouseOver={() => {showOverlayContainer(poster)}}
              onMouseOut={() => {hideOverlayContainer(poster)}}
            >
              <img src={poster.url} alt={poster.title} id={poster.alt} />
              <div className='container-overlay d-flex justify-content-center align-items-center invisible' id={poster.alt}>
                <button onClick={() => displayImg(poster)}>View</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PostersContainer
