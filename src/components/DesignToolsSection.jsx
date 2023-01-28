// CONFIG IMPORTS
import React, {  useContext } from 'react';

// COMPONENTS IMPORTS
import DarkMode from "./context/DarkMode";

// ASSETS IMPORTS
import ai from '../assets/logos/ai.svg';
import ai_dark from '../assets/logos/ai_dark.svg';
import ps from '../assets/logos/ps.svg';
import ps_dark from '../assets/logos/ps_dark.svg';

const CodingLanguageSection = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <div className="languages-tools-section">
      <h3>DESIGN TOOLS</h3>
      <div className="content">
        <div className="language-tool-box">
          <img className="language-tool-logo" src={darkMode ? ai_dark : ai} alt="Illustrator logo" />
          <p>Illustrator</p>
        </div>
        <div className="language-tool-box">
          <img className="language-tool-logo" src={darkMode ? ps_dark : ps} alt="Photoshop logo" />
          <p>Photoshop</p>
        </div>
      </div>
    </div>
  );
};

export default CodingLanguageSection;
