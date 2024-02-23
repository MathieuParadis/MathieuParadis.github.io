// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ExperienceComponent from './ExperienceComponent'

// DATA IMPORTS
import { workExperiences } from '../../data/resume'

const WorkSection = (): JSX.Element => {
  return (
    <div className='work-education-section'>
      <h3>WORK EXPERIENCE</h3>
      <div className='content'>
        {workExperiences.map((el): JSX.Element => {
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

export default WorkSection
