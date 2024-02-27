// REACT IMPORTS
import React from 'react'

// COMPONENTS IMPORTS
import CodingLanguagesSection from '../components/resume/CodingLanguagesSection'
import ContactSection from '../components/resume/ContactSection'
import DesignToolsSection from '../components/resume/DesignToolsSection'
import EducationSection from '../components/resume/EducationSection'
import SpokenLanguagesSection from '../components/resume/SpokenLanguagesSection'
import WorkSection from '../components/resume/WorkSection'

const Resume = (): JSX.Element => {
  return (
    <div className='py-[30px] px-[40px] lg:py-[27px] lg:px-[50px] my-0 mx-[-45px] min-h-screen bg-[var(--basic-color-grey-light)]'>
      <div className='p-[10px] md:p-[20px] lg:p-[30px] my-[-10px] mx-[-20px] md:mx-[45px] lg:mx-[100px] rounded bg-[var(--basic-color-white)] shadow-[0_4px_6px_-1px_var(--shadow-color1),0_2px_4px_-2px_var(--shadow-color2)]'>
        <div className='mb-8'>
          <h1 className='font-bold text-4xl md:text-5xl'>Mathieu Paradis</h1>
          <p className='text-lg md:text-xl mt-3'>French Web Developer based between Europe and Asia. Passionate about minimalism, sustainability, coffee and bread.</p>
          <p className='text-lg md:text-xl mt-2'>I recently picked on design to develop beautiful and impactful interfaces.</p>
        </div>
        <div className='flex flex-col lg:flex-row mt-12'>
          <div className='w-full lg:w-1/2 pr-0 lg:pr-[10px]'>
            <WorkSection />
            <EducationSection />
          </div>
          <div className='flex flex-col h-full w-full lg:w-1/2 pl-0 lg:pl-[10px]'>
            <CodingLanguagesSection />
            <DesignToolsSection />
            <SpokenLanguagesSection />
            <ContactSection />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Resume
