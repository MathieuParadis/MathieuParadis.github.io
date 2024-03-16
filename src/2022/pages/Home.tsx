// REACT IMPORTS
import React, { useContext } from 'react'

// COMPONENTS IMPORTS
import DarkMode from '../components/context/DarkMode'

// ASSETS IMPORTS
import koala from '../assets/images/koala.svg'
import gh_logo from '../assets/logos/github.svg'
import gh_logo_dark from '../assets/logos/github_dark.svg'
import in_logo from '../assets/logos/linkedin.svg'
import in_logo_dark from '../assets/logos/linkedin_dark.svg'
import ig_logo from '../assets/logos/instagram.svg'
import ig_logo_dark from '../assets/logos/instagram_dark.svg'

const Home = (): JSX.Element => {
  const { darkMode } = useContext(DarkMode)

  return (
    <div className='grow flex justify-center items-center py-[30px] px-[15px] md:px-[30px] lg:px-[45px]'>
      <div className='h-full w-[1200px] flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between text-center'>
        <div className='lg:w-[50%] flex flex-col items-center lg:items-start lg:text-start'>
          <h1 className='text-4xl md:text-5xl pb-4 md:pb-0'>
            Hello, I am
            <br></br>
            <span className='font-bold text-6xl'>Mathieu Paradis</span>
          </h1>
          <h2 className='text-xl md:text-2xl pb-4'>I’m a full stack web developer based between Europe and Asia.</h2>
          <div className='flex justify-between w-2/3 md:w-1/2 mt-8'>
            <a href='https://github.com/MathieuParadis' target='_blank' rel='noreferrer'>
              <img className='h-[40px] md:h-[55px] hover:scale-110' src={darkMode ? gh_logo_dark : gh_logo} alt='Github logo' loading="lazy" />
            </a>
            <a href='https://www.linkedin.com/in/mathieu-p-26593498/' target='_blank' rel='noreferrer'>
              <img className='h-[40px] md:h-[55px] hover:scale-110' src={darkMode ? in_logo_dark : in_logo} alt='Linkedin logo' loading="lazy" />
            </a>
            <a href='https://www.instagram.com/shewingcat/' target='_blank' rel='noreferrer'>
              <img className='h-[40px] md:h-[55px] hover:scale-110' src={darkMode ? ig_logo_dark : ig_logo} alt='Instagram logo' loading="lazy" />
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-full lg:w-[39%] lg:mb-0'>
          <img src={koala} alt='Koala drawing' loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Home
