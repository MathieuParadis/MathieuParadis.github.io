// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import ai from '../assets/logos/ai.svg'
import figma from '../assets/logos/figma.svg'
import ps from '../assets/logos/ps.svg'

const CodingLanguageSection = () => {
  return (
    <div className='languages-tools-section'>
      <h3>DESIGN TOOLS</h3>
      <div className='content'>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={ai} alt='Illustrator logo' />
          <p>Illustrator</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={ps} alt='Photoshop logo' />
          <p>Photoshop</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={figma} alt='Photoshop logo' />
          <p>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default CodingLanguageSection
