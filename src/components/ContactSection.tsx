// REACT IMPORT
import React from 'react'

// ASSETS IMPORTS
import mail from '../assets/logos/mail.svg'
import in_logo from '../assets/logos/linkedin.svg'

const ContactSection = () => {
  return (
    <div className='contact-section'>
      <h3>CONTACT</h3>
      <div className='content'>
        <div className='contact-box'>
          <img className='contact-logo' src={mail} alt='Mail logo' />
          <p>mathieuyl.paradis@gmail.com</p>
        </div>
        <div className='contact-box'>
          <img className='contact-logo' src={in_logo} alt='Linkedin logo' />
          <p>linkedin.com/in/mathieu-p-26593498/</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
