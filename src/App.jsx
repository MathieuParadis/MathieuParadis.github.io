// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { Routes, Route } from 'react-router-dom'

// PAGES IMPORTS
import Home from './pages/Home'
import Designs from './pages/Designs'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

// COMPONENTS IMPORTS
import Navbar from './components/navigation/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' exact='true' element={<Projects />} />
        <Route path='/designs' exact='true' element={<Designs />} />
        <Route path='/resume' exact='true' element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
