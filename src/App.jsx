// REACT IMPORT
import React from 'react'

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

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' exact='true' element={<Projects />} />
        <Route path='/designs' exact='true' element={<Designs />} />
        <Route path='/resume' exact='true' element={<Resume />} />
        <Route path='/contact' exact='true' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
