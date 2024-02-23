// REACT IMPORTS
import React, {  useContext } from 'react'

// CONTEXT IMPORTS
import DarkMode from '../context/DarkMode'

// ASSETS IMPORTS
import mail from '../../assets/logos/mail.svg'
import mail_dark from '../../assets/logos/mail_dark.svg'
import linkedIn_logo from '../../assets/logos/linkedin.svg'
import linkedIn_logo_dark from '../../assets/logos/linkedin_dark.svg'

const ContactSection = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='contact-section'>
      <h3>CONTACT</h3>
      <div className='content'>
        <div className='contact-box'>
          <img className='contact-logo' src={darkMode ? mail_dark : mail} alt='Mail logo' loading="lazy" />
          <p>mathieuyl.paradis@gmail.com</p>
        </div>
        <div className='contact-box'>
          <img className='contact-logo' src={darkMode ? linkedIn_logo_dark : linkedIn_logo} alt='Linkedin logo' loading="lazy" />
          <p>linkedin.com/in/mathieu-p-26593498/</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
