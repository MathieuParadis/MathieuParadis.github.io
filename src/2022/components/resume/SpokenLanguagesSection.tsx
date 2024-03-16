// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import circle from '../../assets/logos/circle.svg'
import empty_circle from '../../assets/logos/empty_circle.svg'

// DATA IMPORTS
import { spokenLanguages } from '../../data/resume'

const CodingLanguageSection = (): JSX.Element => {
  return (
    <div className='mb-[60px]'>
      <h2 className='text-2xl font-black mb-[20px]'>LANGUAGES</h2>
      {spokenLanguages.map((el): JSX.Element => {
        return (
          <div className='flex items-center w-full mb-4 gap-2' key={el.title}>
            <p className='p-0 m-0 w-1/3 md:w-1/5 lg:w-1/3'>{el.title}</p>
            <div className='flex justify-between w-[65%] md:w-[55%] lg:w-[65%]'>
              {[...Array(el.actualRating)].map((el, i): JSX.Element => (
                <img
                  key={i}
                  className='w-[30px]'
                  src={circle}
                  alt='circle'
                  loading="lazy"
                />
              ))}
              {[...Array(el.maxRating - el.actualRating)].map((el, i): JSX.Element => (
                <img
                  key={i}
                  className='w-[30px]'
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
  )
}

export default CodingLanguageSection
