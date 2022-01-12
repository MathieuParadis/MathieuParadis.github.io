// CONFIG IMPORTS
import React, { useContext } from 'react';

// COMPONENTS IMPORTS
import DarkMode from "../components/context/DarkMode";

// ASSETS IMPORTS
import koala from '../assets/images/koala.svg';
import gh_logo from '../assets/logos/github.svg';
import gh_logo_dark from '../assets/logos/github_dark.svg';
import in_logo from '../assets/logos/linkedin.svg';
import in_logo_dark from '../assets/logos/linkedin_dark.svg';
import ig_logo from '../assets/logos/instagram.svg';
import ig_logo_dark from '../assets/logos/instagram_dark.svg';

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className="home">
      <div className="d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between">
        <div className="presentation d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start px-2 px-lg-0">
          <h1 className="presentation-name">Hello, I am<br></br><strong>Mathieu Paradis</strong></h1>
          <h3 className="presentation-description">I’m a full stack web developer based between Europe and Asia.</h3>
          <div className="networks">
            <a href="https://github.com/MathieuParadis" target="_blank">
              <img className="social-network-logo" src={darkMode ? gh_logo_dark : gh_logo} alt="Github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/mathieu-p-26593498/" target="_blank">
              <img className="social-network-logo" src={darkMode ? in_logo_dark : in_logo} alt="Linkedin logo"/>
            </a>
            <a href="https://www.instagram.com/shewingcat/" target="_blank">
              <img className="social-network-logo" src={darkMode ? ig_logo_dark : ig_logo} alt="Instagram logo"/>
            </a>
          </div>
        </div>
        <div className="illustration mb-3 mb-lg-0">
          <img src={koala} alt="Koala drawing" />
        </div>
      </div>
    </div>
  );
};

export default Home;