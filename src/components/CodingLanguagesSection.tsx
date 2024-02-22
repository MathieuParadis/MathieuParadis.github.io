// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import js from '../assets/logos/js.svg'
import next from '../assets/logos/next.svg'
import react from '../assets/logos/react.svg'
import ruby from '../assets/logos/ruby.svg'
import rails from '../assets/logos/rails.svg'
import ts from '../assets/logos/TS.svg'

const CodingLanguageSection = () => {
  return (
    <div className='languages-tools-section'>
      <h3>PROGRAMMING LANGUAGES</h3>
      <div className='content'>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={html} alt='HTML5 logo' />
          <p>HTML 5</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={css} alt='CSS3 logo' />
          <p>CSS 3</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={js} alt='JS logo' />
          <p>JavaScript</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={react} alt='React logo' />
          <p>React JS</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={next} alt='React logo' />
          <p>Next JS</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={ts} alt='React logo' />
          <p>Typescript</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={ruby} alt='Ruby logo' />
          <p>Ruby</p>
        </div>
        <div className='language-tool-box'>
          <img className='language-tool-logo' src={rails} alt='Ruby on Rails logo' />
          <p>Rails</p>
        </div>
      </div>
    </div>
  )
}

export default CodingLanguageSection
