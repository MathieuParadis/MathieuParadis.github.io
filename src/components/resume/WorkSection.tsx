// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ExperienceComponent from './ExperienceComponent'

// DATA IMPORTS
import { workExperiences } from '../../data/resume'

const WorkSection = (): JSX.Element => {
  return (
    <div className='mb-[60px]'>
      <h2 className='text-2xl font-black mb-[20px]'>WORK EXPERIENCE</h2>
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
  )
}

export default WorkSection
