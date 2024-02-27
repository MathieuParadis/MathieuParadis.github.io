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
    <div className='my-[30px] mx-[10px] md:mx-[45px] flex justify-center items-center'>
      <div className='contact-card overflow-hidden'>
        <div className='flex flex-col justify-center w-full lg:w-[40%] lg:bg-[var(--lighter-prim-color)] mb-8 lg:mb-0 px-[30px]'>
          <h1 className='text-3xl md:text-5xl text-center lg:text-left'>Get in touch</h1>
          <p className='text-xl lg:text-2xl text-center lg:text-left'>Drop a message or contact me directly!</p>
          <div className='contact-means'>
            <a href='mailto:mathieuyl.paradis@gmail.com' target='_blank' rel='noreferrer'>
              <img className='contact-logo pe-4' src={darkMode ? mail_dark : mail} alt='Mail logo' loading="lazy"/>
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='contact-logo' src={darkMode ? linkedIn_logo_dark : linkedIn_logo} alt='Linkedin logo' loading="lazy" />
            </a>
          </div>
        </div>
        <div className='flex w-full lg:w-[60%] py-0 lg:py-4 px-[30px]'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
