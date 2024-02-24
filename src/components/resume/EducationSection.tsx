// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ExperienceComponent from './ExperienceComponent'

// DATA IMPORTS
import { educationExperiences } from '../../data/resume'

const EducationSection = (): JSX.Element => {
  return (
    <div className='work-education-section'>
      <h3>EDUCATION</h3>
      <div className='content'>
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
    </div>
  )
}

export default EducationSection
