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
    <div className='project-card h-[250px] w-full rounded-2xl'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            className='w-full h-full'
            src={project.img}
            alt={project.title + ' illustration'}
            loading="lazy"
          />
        </div>
        <div className='flip-card-back'>
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
