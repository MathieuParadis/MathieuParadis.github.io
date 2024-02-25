// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import circle from '../../assets/logos/circle.svg'
import circle_outline from '../../assets/logos/empty_circle.svg'

const CodingLanguageSection = (): JSX.Element => {
  return (
    <div className='spoken-languages-section'>
      <h3>LANGUAGES</h3>
      <div className='content'>
        <div className='language-box'>
          <p>French</p>
          <div className='language-rating'>
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
          </div>
        </div>
        <div className='language-box'>
          <p>English</p>
          <div className='language-rating'>
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
          </div>
        </div>
        <div className='language-box'>
          <p>Portuguese</p>
          <div className='language-rating'>
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
          </div>
        </div>
        <div className='language-box'>
          <p>Chinese</p>
          <div className='language-rating'>
            <img className='language-circle' src={circle} alt='circle' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
            <img className='language-circle' src={circle_outline} alt='circle_outline' loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingLanguageSection
