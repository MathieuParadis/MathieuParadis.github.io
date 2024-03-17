// REACT IMPORTS
import React, { useEffect, useState } from 'react'

// REACT-ROUTER-DOM IMPORTS
import { Routes, Route } from 'react-router-dom'

// PAGES IMPORTS
import Archive from './pages/Archive'
import Home from './pages/Home'

// COMPONENTS IMPORTS
import Navbar from './components/navigation/Navbar'

// DATA IMPORTS
import { routesObject } from './data/routes'

const App = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false)
  const body = document.querySelector('body') as HTMLElement

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
    <div className='app-2024'>
      <Navbar />
      <Routes>
        <Route path={routesObject.home.path} element={<Home />} />
        <Route path={routesObject.archive.path} element={<Archive />} />
      </Routes>
    </div>
  )
}

export default App
