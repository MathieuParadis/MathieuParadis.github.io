// REACT IMPORTS
import React, {useState} from 'react'

// COMPONENTS IMPORTS
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/modals/ProjectModal'

// COMPONENTS DATA
import projects from '../data/projects'

const Projects = (): JSX.Element => {
  const [currentProject, setCurrentProject] = useState(null)

  const openModal = (project):void => {
    setCurrentProject(project)
    const modal = document.querySelector('.project-modal') as HTMLElement
    modal.style.visibility = 'visible'
    document.body.style.overflow = 'hidden'
  }

  return (
    <div className='portfolio'>
      <h1 className='ps-2'>Recent projects</h1>
      <div className='projects'>
        {
          projects.map((project): JSX.Element => {
            return (
              <ProjectCard project={project} setOpenModal={openModal} key={project.title}/>
            )
          })
        }
      </div>
      <ProjectModal project={currentProject}/>
    </div>
  )
}

export default Projects
