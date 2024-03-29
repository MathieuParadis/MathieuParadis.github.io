// REACT IMPORTS
import React, { useEffect } from 'react'

// TYPES IMPORTS
import { type DesignType } from '../../types/designTypes'

interface Props {
  display: boolean
  setDisplay: (value: boolean) => void
  img: DesignType | null
  setImg: (value: DesignType | null) => void
}

const ImgModal = ({ display, setDisplay, img, setImg }: Props): JSX.Element => {
  const closeModal = (): void => {
    setImg(null)
    setDisplay(false)
  }

  // Close modal on Escape
  useEffect((): (() => void) => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', close)
    return (): void => {
      window.removeEventListener('keydown', close)
    }
  })

  return (
    <div className={`relative ${display ? 'visible' : 'invisible'}`}>
      <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-full z-[200] bg-black' onClick={closeModal}>
        <div className='fixed flex justify-center items-center h-screen min-w-[50%] z-[201] bg-white'>
          <img
            className='h-full w-full object-contain'
            src={img?.img}
            alt={img?.title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default ImgModal
