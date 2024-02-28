// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import circle from '../../assets/logos/circle.svg'
import empty_circle from '../../assets/logos/empty_circle.svg'

// DATA IMPORTS
import { spokenLanguages } from '../../data/resume'

const CodingLanguageSection = (): JSX.Element => {
  return (
    <div className='spoken-languages-section'>
      <h3 className='text-2xl font-black mb-[20px]'>LANGUAGES</h3>
      <div className='content'>
        {spokenLanguages.map((el): JSX.Element => {
          return (
            <div className='language-box' key={el.title}>
              <p>{el.title}</p>
              <div className='language-rating'>
                {[...Array(el.actualRating)].map((el, i): JSX.Element => (
                  <img
                    key={i}
                    className='language-circle'
                    src={circle}
                    alt='circle'
                    loading="lazy"
                  />
                ))}
                {[...Array(el.maxRating - el.actualRating)].map((el, i): JSX.Element => (
                  <img
                    key={i}
                    className='language-circle'
                    src={empty_circle}
                    alt='circle'
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CodingLanguageSection
