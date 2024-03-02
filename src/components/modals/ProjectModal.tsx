// REACT IMPORTS
import React, { useEffect } from 'react'

// TYPES IMPORTS
import { type ProjectType } from '../../types/projectTypes'

interface Props { 
  project: ProjectType | null
}

const ProjectModal = (props: Props): JSX.Element => {
  const { project } = props
  const modal = document.querySelector('.project-modal') as HTMLElement

  const closeModal = (): void => {
    modal.style.visibility = 'hidden'
    document.body.style.overflow = 'auto'
  }

  window.onclick = (event): void => {
    event.target === document.querySelector('.project-modal-overlay') &&
    event.target !== document.querySelector('.project-modal-content') &&
    closeModal()
  }

  useEffect((): void => {
    // close modal on esc
    const handleKeyPress = (e): void => {
      if (e.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.removeEventListener('keydown', handleKeyPress)
  })

  return (
    <div className='project-modal fixed top-0 left-0 h-screen flex justify-center items-center z-[100]'>
      <div className='project-modal-overlay'></div>
      <div className='project-modal-content'>
        {project &&
          <>
            <h1 className='m-0'>{project.title}</h1>
            <img src={project.img} alt={project.title + ' illustration'} loading="lazy" />
            <p>{project.description}</p>
            <p><strong>Stack:</strong><br></br>{project.stack}</p>
            <a href={project.url} target='_blank' className='project-link' rel='noreferrer'>
              {project.isWebsiteURL ? 'Visit website' : 'See repository'}
            </a>
          </>
        }
      </div>
    </div>
  )
}

export default ProjectModal
