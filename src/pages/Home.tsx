// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import koala from '../assets/images/koala.svg'
import gh_logo from '../assets/logos/github.svg'
import in_logo from '../assets/logos/linkedin.svg'
import ig_logo from '../assets/logos/instagram.svg'

const Home = () => {
  return (
    <div className='home'>
      <div className='d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between'>
        <div className='presentation d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start px-2 px-lg-0'>
          <h1 className='presentation-name'>Hello, I am<br></br><strong>Mathieu Paradis</strong></h1>
          <h3 className='presentation-description'>I’m a full stack web developer based between Europe and Asia.</h3>
          <div className='networks'>
            <a href='https://github.com/MathieuParadis' target='_blank' rel='noreferrer'>
              <img className='social-network-logo' src={gh_logo} alt='Github logo'/>
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='social-network-logo' src={in_logo} alt='Linkedin logo'/>
            </a>
            <a href='https://www.instagram.com/shewingcat/' target='_blank' rel='noreferrer'>
              <img className='social-network-logo' src={ig_logo} alt='Instagram logo'/>
            </a>
          </div>
        </div>
        <div className='illustration mb-3 mb-lg-0'>
          <img src={koala} alt='Koala drawing' />
        </div>
      </div>
    </div>
  )
}

export default Home
