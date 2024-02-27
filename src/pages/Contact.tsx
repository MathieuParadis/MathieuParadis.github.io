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
      <div className='flex flex-col lg:flex-row my-[-10px] mx-[-30px] md:mx-[45px] lg:m-[30px] p-[20px] md:p-[30px] lg:p-0 rounded overflow-hidden min-h-[70vh] min-w-[70vw] shadow-[0_35px_60px_-15px_var(--shadow-color2)]'>
        <div className='flex flex-col justify-center w-full text-center lg:w-[40%] lg:bg-[var(--lighter-prim-color)] mb-8 lg:mb-0 lg:px-[30px]'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl lg:text-left mb-3'>Get in touch</h1>
          <p className='text-xl lg:text-2xl lg:text-left'>Drop a message or contact me directly!</p>
          <div className='flex justify-center lg:justify-start mt-4 gap-4'>
            <a href='mailto:mathieuyl.paradis@gmail.com' target='_blank' rel='noreferrer'>
              <img className='h-[30px] md:h-[40px] hover:scale-110' src={darkMode ? mail_dark : mail} alt='Mail logo' loading="lazy"/>
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='h-[30px] md:h-[40px] hover:scale-110' src={darkMode ? linkedIn_logo_dark : linkedIn_logo} alt='Linkedin logo' loading="lazy" />
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
