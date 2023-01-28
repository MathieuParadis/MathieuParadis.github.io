// REACT IMPORTS
import React, {useState} from 'react'

// COMPONENTS IMPORTS
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

// COMPONENTS DATA
import projects from '../data/Projects'

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(null)

  const openModal = (project) => {
    setCurrentProject(project)
    let modal = document.querySelector('.project-modal')
    modal.style.visibility = 'visible'
  }

  return (
    <div className='portfolio'>
      <h1 className='ps-2'>Recent projects</h1>
      <div className='projects'>
        {
          projects.map((project) => {
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

export default Portfolio
