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
      <div className='relative p-2 flex flex-wrap justify-between items-center'>
        {images.map((image): JSX.Element => {
          return (
            <div 
              className="col-12 col-sm-6 col-md-4 col-lg-3 relative border-2 border-[var(--sec-color)] h-[300px] p-2 cursor-pointer overflow-hidden" 
              key={image.alt}
              onMouseEnter={(): void => {showOverlayContainer(image)}}
              onMouseLeave={(): void => {hideOverlayContainer(image)}}
            >
              <div className="border-4 border-[var(--sec-color)] h-full w-full">
                <img
                  id={image.alt}
                  className='h-full w-full object-cover'
                  src={image.img}
                  alt={image.title}
                  loading="lazy"
                />
                <div id={image.alt} className='flex justify-center items-center invisible absolute top-0 left-0 h-full w-full'>
                  <button
                    className='w-[100px] border-0 rounded-[40px] p-[10px] bg-[var(--prim-color)] text-white hover:scale-105 focus:outline-none'
                    onClick={(): void => setImg(image)}
                    disabled={enableBtn !== image}
                  >
                    View
                  </button>
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
