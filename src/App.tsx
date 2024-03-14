// REACT IMPORTS
import React, { useEffect, useState } from 'react'

// REACT-ROUTER-DOM IMPORTS
import { Routes, Route } from 'react-router-dom'

// PAGES IMPORTS
import Home from './pages/Home'
import Designs from './pages/Designs'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

// COMPONENTS IMPORTS
import Navbar from './components/navigation/Navbar'

// CONTEXT IMPORTS
import DarkMode from './components/context/DarkMode'

// DATA IMPORTS
import { routesObject } from './data/routes'

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false)
  const body = document.querySelector('body') as HTMLElement

  const switchMode = (): void => {
    body.classList.toggle('dark-mode')
    localStorage.setItem('darkModePreference', String(!darkMode))
    setDarkMode(!darkMode)
  }

  useEffect((): void => {
    if (localStorage.getItem('darkModePreference')) {
      const darkModePreference = localStorage.getItem('darkModePreference')
      setDarkMode(darkModePreference === 'true' ? true : false)
    }
  }, [])

  useEffect((): void => {
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [darkMode, body.classList])

  return (
    <div className='app'>
      <DarkMode.Provider value={{ darkMode, setDarkMode: switchMode }}>
        <Navbar />
        <Routes>
          <Route path={routesObject.home.path} element={<Home />} />
          <Route path={routesObject.projects.path} element={<Projects />} />
          <Route path={routesObject.designs.path} element={<Designs />} />
          <Route path={routesObject.resume.path} element={<Resume />} />
          <Route path={routesObject.contact.path} element={<Contact />} />
        </Routes>
      </DarkMode.Provider>
    </div>
  )
}

export default App
