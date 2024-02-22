// REACT IMPORT
import React from 'react'

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

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/designs' element={<Designs />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
