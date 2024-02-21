// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ContactForm from '../components/ContactForm'

// ASSETS IMPORTS
import in_logo from '../assets/logos/linkedin.svg'
import mail from '../assets/logos/mail.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-card'>
        <div className='card-left'>
          <h1>Get in touch</h1>
          <p>Drop a message or contact me directly!</p>
          <div className='contact-means'>
            <a href='mailto:mathieuyl.paradis@gmail.com' target='_blank' rel='noreferrer'>
              <img className='contact-logo pe-4' src={mail} alt='Mail logo'/>
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='contact-logo' src={in_logo} alt='Linkedin logo'/>
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
