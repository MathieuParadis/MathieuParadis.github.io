// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ExperienceComponent from './ExperienceComponent'

// DATA IMPORTS
import { educationExperiences } from '../../data/resume'

const EducationSection = (): JSX.Element => {
  return (
    <div className='mb-[60px]'>
      <h3 className='text-2xl font-black mb-[10px]'>EDUCATION</h3>
      {educationExperiences.map((el): JSX.Element => {
          return (
            <ExperienceComponent
              key={el.title}
              title={el.title} 
              location={el.location}
              date={el.date}
              description={el.description}
            />
          )
      })}
    </div>
  )
}

export default EducationSection
