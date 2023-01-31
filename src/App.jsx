// REACT IMPORTS
import React, { useEffect, useState } from 'react'

// REACT-ROUTER-DOM IMPORTS
import { Routes, Route } from 'react-router-dom'

// PAGES IMPORTS
import Home from './pages/Home'
import Contact from './pages/Contact'
import Designs from './pages/Designs'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

// COMPONENTS IMPORTS
import Navigation from './components/Navigation'
import DarkMode from './components/context/DarkMode'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const switchMode = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-mode')
    localStorage.setItem('darkModePreference', String(!darkMode))
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (localStorage.getItem('darkModePreference')) {
      const darkModePreference = localStorage.getItem('darkModePreference')
      setDarkMode(darkModePreference === 'true' ? true : false)
    }
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  }, [darkMode])

  return (
    <div className='app'>
      <DarkMode.Provider value={{ darkMode, setDarkMode: switchMode }}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' exact='true' element={<Projects />} />
          <Route path='/designs' exact='true' element={<Designs />} />
          <Route path='/resume' exact='true' element={<Resume />} />
          <Route path='/contact' exact='true' element={<Contact />} />
        </Routes>
      </DarkMode.Provider>
    </div>
  )
}

export default App
