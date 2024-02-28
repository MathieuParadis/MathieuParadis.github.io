// REACT IMPORTS
import React, {  useContext } from 'react'

// COMTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// DATA IMPORTS
import { codingLanguages } from '../../data/resume'

const CodingLanguageSection = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='mb-[60px]'>
      <h3 className='text-2xl font-black mb-[20px]'>PROGRAMMING LANGUAGES</h3>
      <div className='flex justify-between flex-wrap'>
        {codingLanguages.map((el): JSX.Element => {
          return (
            <div className='flex items-center gap-2 w-1/2 mb-8' key={el.title}>
              <img
                className='h-[35px] md:h-[45px] lg:h-[50px]'
                src={darkMode ? el.imgDark: el.imgLight}
                alt={el.alt}
                loading="lazy"
              />
              <p className='m-0 text-lg'>{el.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CodingLanguageSection
