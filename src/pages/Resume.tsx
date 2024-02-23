// REACT IMPORTS
import React from 'react'

// COMPONENTS IMPORTS
import CodingLanguagesSection from '../components/resume/CodingLanguagesSection'
import ContactSection from '../components/resume/ContactSection'
import DesignToolsSection from '../components/resume/DesignToolsSection'
import EducationSection from '../components/resume/EducationSection'
import SpokenLanguagesSection from '../components/resume/SpokenLanguagesSection'
import WorkSection from '../components/resume/WorkSection'

const Resume = () => {
  return (
    <div className='resume'>
      <div className='page'>
        <div className='content'>
          <div className='head'>
            <h1><strong>Mathieu Paradis</strong></h1>
            <p className='mb-0'>French Web Developer based between Europe and Asia. Passionate about minimalism, sustainability, coffee and bread.</p>
            <p className='mt-2'>I recently picked on design to develop beautiful and impactful interfaces.</p>
          </div>
          <div className='body d-flex flex-column flex-lg-row'>
            <div className='first-section w-100 w-lg-50'>
              <WorkSection />
              <EducationSection />
            </div>
            <div className='second-section d-flex flex-column h-100 w-100 w-lg-50'>
              <CodingLanguagesSection />
              <DesignToolsSection />
              <SpokenLanguagesSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
