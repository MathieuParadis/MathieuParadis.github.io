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
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/designs' element={<Designs />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </DarkMode.Provider>
    </div>
  )
}

export default App
