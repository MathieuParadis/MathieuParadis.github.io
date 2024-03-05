// REACT IMPORT
import React from 'react'

// TYPES IMPORTS
import { type ProjectType } from '../types/projectTypes'

interface Props {
  project: ProjectType
  setOpenModal: (value: ProjectType) => void
}

const ProjectCard = ({ project, setOpenModal }: Props): JSX.Element => {
  return (
    <div className='project-card h-[250px] lg:h-[300px] rounded-2xl'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            className='w-full h-full object-cover'
            src={project.img}
            alt={project.title + ' illustration'}
            loading="lazy"
          />
        </div>
        <div className='flip-card-back'>
          <p className='font-semibold mb-3'>{project.title}</p>
          <button
            className='w-[150px] border-none rounded-full p-[10px] bg-[var(--third-color)] text-white hover:bg-[var(--darker-third-color)] focus:outline-none'
            onClick={(): void => setOpenModal(project)}
          >
            View project
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
