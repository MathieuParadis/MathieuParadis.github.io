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

  useEffect((): void => {
    // close modal on esc
    const handleKeyPress = (e): void => {
      if (e.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.removeEventListener('keydown', handleKeyPress)
  })

  return (
    <div className={`img-modal ${display ? 'visible' : 'invisible'}`}>
      <div className='overlay' onClick={closeModal}>
        <div className='content'>
          <img src={img?.img} alt={img?.title} />
        </div>
      </div>
    </div>
  )
}

export default ImgModal
