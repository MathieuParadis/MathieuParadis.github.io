// REACT IMPORT
import React from 'react'

// TYPES IMPORTS
import { type ExperienceType } from '../../types/resumeTypes'

const ExperienceComponent = ({ title, location, date, description }: ExperienceType): JSX.Element => {
  return (
    <div className='experience-component'>
      <h4 className='title'>{title}</h4>
      <div className='location-date'>
        <h5 className='location'>{location}</h5>
        <span></span>
        <h6 className='date'>{date}</h6>
      </div>
      <p className='description'>{description}</p>
    </div>
  )
}

export default ExperienceComponent
