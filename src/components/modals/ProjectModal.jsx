// REACT IMPORTS
import React, { useEffect } from 'react'

const ProjectModal = ({project}) => {
  const closeModal = () => {
    const modal = document.querySelector('.project-modal')
    modal.style.visibility = 'hidden'
    document.body.style.overflow = 'auto'

  }

  window.onclick = (event) => {
    event.target === document.querySelector('.project-modal-overlay') &&
    event.target !== document.querySelector('.project-modal-content') &&
    closeModal()
  }

  useEffect(() => {
    // close modal on esc
    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className='project-modal'>
      <div className='project-modal-overlay'></div>
      <div className='project-modal-content'>
        {project &&
          <>
            <h1 className='m-0'>{project.title}</h1>
            <img src={project.img} alt={project.title + ' illustration'} />
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
