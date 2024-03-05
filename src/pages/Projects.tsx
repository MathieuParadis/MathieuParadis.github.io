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
    const modal = document.querySelector('#project-modal') as HTMLElement
    modal.classList.remove('invisible')
    document.body.classList.add('overflow-hidden')
  }

  return (
    <div className='grow py-[30px] px-[15px] md:px-[30px] lg:px-[45px]'>
      <h1 className='mx-[50px] text-center text-2xl md:text-4xl font-bold mb-[20px] md:mb-[40px]'>Recent projects</h1>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[50px]'>
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
