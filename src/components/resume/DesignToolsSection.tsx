// REACT IMPORTS
import React, {  useContext } from 'react'

// CONTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// DATA IMPORTS
import { designTools } from '../../data/resume'

const CodingLanguageSection = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='languages-tools-section'>
      <h3 className='text-2xl font-black mb-[10px]'>DESIGN TOOLS</h3>
      <div className='content'>
        {designTools.map((el): JSX.Element => {
          return (
            <div className='language-tool-box' key={el.title}>
              <img
                className='language-tool-logo'
                src={darkMode ? el.imgDark: el.imgLight}
                alt={el.alt}
                loading="lazy"
              />
              <p>{el.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CodingLanguageSection
