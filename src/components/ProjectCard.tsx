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
    <div className='project-card col-12 col-md-6 col-lg-4 my-3 p-0 px-sm-2'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={project.img} alt={project.title + ' illustration'} />
        </div>
        <div className='flip-card-back'>
          <button onClick={(): void => setOpenModal(project)}>View project</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
