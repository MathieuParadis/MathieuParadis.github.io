// REACT IMPORTS
import React, { useState, useEffect } from 'react'

// COMPONENTS IMPORTS
import ImgModal from './modals/ImgModal'

// TYPES IMPORTS
import { type DesignType } from '../types/designTypes'

interface Props {
  images: DesignType[]
}

const ImagesContainer = ({ images }: Props): JSX.Element => {
  const [display, setDisplay] = useState(false)
  const [img, setImg] = useState<DesignType | null>(null)
  const [hoveredImg, setHoveredImg] = useState<DesignType | null>(null)
  const [enableBtn, setEnableBtn] = useState<DesignType | null>(null)

  const showOverlayContainer = (image: DesignType): void => {
    const img = document.querySelector(`img#${image.alt}`) as HTMLElement
    const divBtn = document.querySelector(`div#${image.alt}`) as HTMLElement

    img.classList.add('blurr')
    divBtn.classList.remove('invisible')
    setHoveredImg(image)
  }

  const hideOverlayContainer = (image: DesignType): void => {
    const img = document.querySelector(`img#${image.alt}`) as HTMLElement
    const divBtn = document.querySelector(`div#${image.alt}`) as HTMLElement

    img.classList.remove('blurr')
    divBtn.classList.add('invisible')
    setHoveredImg(null)
  }

  useEffect((): void => {
    setEnableBtn(hoveredImg)
  }, [hoveredImg])

  useEffect((): void => {
    if (img != null) {
      setDisplay(true)
    }
  }, [img])

  return (
    <>
      <ImgModal display={display} setDisplay={setDisplay} img={img} setImg={setImg} />
      <div className='imgs-container d-flex flex-wrap justify-content-between align-items-center'>
        {images.map((image): JSX.Element => {
          return (
            <div 
              className="img-container col-12 col-sm-6 col-md-4 col-lg-3" 
              key={image.alt}
              onMouseEnter={(): void => {showOverlayContainer(image)}}
              onMouseLeave={(): void => {hideOverlayContainer(image)}}
            >
              <div className="img-subcontainer h-100 w-100" >
                <img src={image.img} alt={image.title} id={image.alt} />
                <div className='container-overlay d-flex justify-content-center align-items-center invisible' id={image.alt}>
                  <button onClick={(): void => setImg(image)} disabled={enableBtn !== image}>View</button>
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
