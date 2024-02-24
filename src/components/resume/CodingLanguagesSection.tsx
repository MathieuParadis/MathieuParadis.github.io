// REACT IMPORTS
import React, {  useContext } from 'react'

// COMTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// DATA IMPORTS
import { codingLanguages } from '../../data/resume'

const CodingLanguageSection = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='languages-tools-section'>
      <h3>PROGRAMMING LANGUAGES</h3>
      <div className='content'>
        {codingLanguages.map((el): JSX.Element => {
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
