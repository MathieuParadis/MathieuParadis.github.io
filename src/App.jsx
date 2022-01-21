import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// import components
import Navigation from './components/Navigation';
import DarkMode from './components/context/DarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    // localStorage.setItem("themePreference", String(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      <Router>
        <DarkMode.Provider value={{ darkMode, setDarkMode: switchMode }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" exact="true" element={<Portfolio />} />
            <Route path="/resume" exact="true" element={<Resume />} />
            <Route path="/contact" exact="true" element={<Contact />} />
          </Routes>
        </DarkMode.Provider>
      </Router>
    </div>
  );
}

export default App;