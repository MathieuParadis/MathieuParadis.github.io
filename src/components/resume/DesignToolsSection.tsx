// REACT IMPORTS
import React, {  useContext } from 'react'

// CONTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// ASSETS IMPORTS
import ai from '../../assets/logos/ai.svg'
import ai_dark from '../../assets/logos/ai_dark.svg'
import figma from '../../assets/logos/figma.svg'
import figma_dark from '../../assets/logos/figma_dark.svg'
import ps from '../../assets/logos/ps.svg'
import ps_dark from '../../assets/logos/ps_dark.svg'

const CodingLanguageSection = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='languages-tools-section'>
      <h3>DESIGN TOOLS</h3>
      <div className='content'>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={darkMode? ai_dark : ai} alt='Illustrator logo' loading="lazy" />
          <p>Illustrator</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={darkMode ? ps_dark : ps} alt='Photoshop logo' loading="lazy" />
          <p>Photoshop</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={darkMode ? figma_dark : figma} alt='Photoshop logo' loading="lazy" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default CodingLanguageSection
