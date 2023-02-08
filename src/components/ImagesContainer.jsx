// REACT IMPORTS
import React, { useState, useEffect } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './ImgModal'

const ImagesContainer = ({ images }) => {
  const [display, setDisplay] = useState(false)
  const [img, setImg] = useState(null)
  const [test, setTest] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(true)

  const showOverlayContainer = (image) => {
    const img = document.querySelector(`img#${image.alt}`)
    const divBtn = document.querySelector(`div#${image.alt}`)

    img.classList.add('blurr')
    divBtn.classList.remove('invisible')
    setTest(true)
  }

  const hideOverlayContainer = (image) => {
    const img = document.querySelector(`img#${image.alt}`)
    const divBtn = document.querySelector(`div#${image.alt}`)

    img.classList.remove('blurr')
    divBtn.classList.add('invisible')
    setTest(false)
  }

  useEffect(() => {
    if (img != null) {
      setDisplay(true)
    }
  }, [img])


  useEffect(() => {
    setDisabledBtn(!test)
  }, [test])

  return (
    <>
      <ImgModal display={display} setDisplay={setDisplay} img={img} setImg={setImg} />
      <div className='imgs-container d-flex flex-wrap justify-content-between align-items-center'>
        {images.map((image) => {
          return (
            <div 
              className="img-container col-12 col-sm-6 col-md-4 col-lg-3" 
              key={image.alt}
              onMouseEnter={() => {showOverlayContainer(image)}}
              onMouseLeave={() => {hideOverlayContainer(image)}}
            >
              <div className="img-subcontainer h-100 w-100" >
                <img src={image.url} alt={image.title} id={image.alt} />
                <div className='container-overlay d-flex justify-content-center align-items-center invisible' id={image.alt}>
                  <button onClick={() => setImg(image)} disabled={disabledBtn}>View</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ImagesContainer
