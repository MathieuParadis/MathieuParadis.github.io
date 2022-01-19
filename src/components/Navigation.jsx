// CONFIG IMPORTS
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// COMPONENTS IMPORTS
import DarkMode from "./context/DarkMode";
import DarkModeBtn from "./DarkModeBtn";
import HamburgerMenu from './HamburgerMenu';

// ASSETS IMPORTS
import logo from '../assets/logos/logo.svg';
import logo_dark from '../assets/logos/logo_dark.svg';

const Navigation = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const location = useLocation();
  const history = useNavigate()

  const refreshPage = () => {
    
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      history.push("/");
    }
  }

  return (
    <div className="navigation">
      <div>
        <img className="logo" src={darkMode ? logo_dark : logo} alt="MP logo" onClick={refreshPage} />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="nav-links pe-4">
          <NavLink exact="true" to="/">Home</NavLink>
          <NavLink exact="true" to="/portfolio">Portfolio</NavLink>
          <NavLink exact="true" to="/resume">Resume</NavLink>
          <NavLink exact="true" to="/contact">Contact</NavLink>
        </div>
        <DarkModeBtn />
        <HamburgerMenu />
      </div>
    </div>
  );
};
export default Navigation;

