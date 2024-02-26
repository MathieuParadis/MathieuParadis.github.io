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
    <div className='mb-[60px]'>
      <h3 className='text-2xl font-black mb-[10px]'>CONTACT</h3>
      <div>
        <div className='contact-box'>
          <img
            className='w-[30px] md:w-[35px]'
            src={darkMode ? mail_dark : mail}
            alt='Mail logo'
            loading="lazy"
          />
          <p>mathieuyl.paradis@gmail.com</p>
        </div>
        <div className='contact-box'>
        <img
            className='w-[30px] md:w-[35px]'
            src={darkMode ? linkedIn_logo_dark : linkedIn_logo}
            alt='Mail logo'
            loading="lazy"
          />
          <p>linkedin.com/in/mathieu-p-26593498/</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
