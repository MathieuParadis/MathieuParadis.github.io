// REACT IMPORTS
import React, {useContext} from 'react'

// COMPONENTS IMPORTS
import ContactForm from '../components/ContactForm'

// CONTEXT IMPORTS
import DarkMode from '../components/context/DarkMode'

// ASSETS IMPORTS
import linkedIn_logo from '../assets/logos/linkedin.svg'
import linkedIn_logo_dark from '../assets/logos/linkedin_dark.svg'
import mail from '../assets/logos/mail.svg'
import mail_dark from '../assets/logos/mail_dark.svg'

const Contact = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='contact'>
      <div className='contact-card'>
        <div className='card-left'>
          <h1>Get in touch</h1>
          <p>Drop a message or contact me directly!</p>
          <div className='contact-means'>
            <a href='mailto:mathieuyl.paradis@gmail.com' target='_blank' rel='noreferrer'>
              <img className='contact-logo pe-4' src={darkMode ? mail_dark : mail} alt='Mail logo' loading="lazy"/>
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='contact-logo' src={darkMode ? linkedIn_logo_dark : linkedIn_logo} alt='Linkedin logo' loading="lazy" />
            </a>
          </div>
        </div>
        <div className='card-right'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
