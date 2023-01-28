// REACT IMPORTS
import React, { useEffect, useState } from 'react'

// REACT-ROUTER-DOM IMPORTS
import { Routes, Route, useNavigate } from 'react-router-dom'

// PAGES IMPORTS
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

// COMPONENTS IMPORTS
import Navigation from './components/Navigation'
import DarkMode from './components/context/DarkMode'

const App = () => {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)

  const switchMode = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-mode')
    // localStorage.setItem('themePreference', String(!darkMode))
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div className='app'>
      <DarkMode.Provider value={{ darkMode, setDarkMode: switchMode }}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' exact='true' element={<Portfolio />} />
          <Route path='/resume' exact='true' element={<Resume />} />
          <Route path='/contact' exact='true' element={<Contact />} />
        </Routes>
      </DarkMode.Provider>
    </div>
  )
}

export default App
