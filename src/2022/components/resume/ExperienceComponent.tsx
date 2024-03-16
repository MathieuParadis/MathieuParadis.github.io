// REACT IMPORT
import React from 'react'

// TYPES IMPORTS
import { type ExperienceType } from '../../types/resumeTypes'

const ExperienceComponent = ({ title, location, date, description }: ExperienceType): JSX.Element => {
  return (
    <div className='mb-[32px]'>
      <h3 className='text-lg mg:text-xl font-bold'>{title}</h3>
      <div className='flex items-baseline gap-[8px] mb-[6px]'>
        <p className='m-0 text-[var(--third-color)]'>{location}</p>
        <span className='h-[20px] w-[2px] bg-[var(--basic-color-dark)]'></span>
        <p className='m-0'>{date}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceComponent
