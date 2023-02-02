// REACT IMPORTS
import React, { useEffect } from 'react'

const ImgModal = ({ display, setDisplay, img }) => {
  const closeModal = () => {
    setDisplay(false)
  }

  useEffect(() => {
    // close modal on esc
    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  })

  return (
    <div className={`img-modal ${display ? 'visible' : 'invisible'}`}>
      <div className='overlay' onClick={closeModal}>
        <div className='content'>
          <img src={img.url} alt={img.title} />
        </div>
      </div>
    </div>
  )
}

export default ImgModal
