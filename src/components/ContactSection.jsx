// CONFIG IMPORTS
import React, {  useContext } from 'react';

// COMPONENTS IMPORTS
import DarkMode from "./context/DarkMode";

// ASSETS IMPORTS
import mail from '../assets/logos/mail.svg';
import mail_dark from '../assets/logos/mail_dark.svg';
import in_logo from '../assets/logos/linkedin.svg';
import in_logo_dark from '../assets/logos/linkedin_dark.svg';

const ContactSection = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  
  return (
    <div className="contact-section">
      <h3>CONTACT</h3>
      <div className="content">
        <div className="contact-box">
          <img className="contact-logo" src={darkMode ? mail_dark : mail} alt="Mail logo" />
          <p>mathieuyl.paradis@gmail.com</p>
        </div>
        <div className="contact-box">
          <img className="contact-logo" src={darkMode ? in_logo_dark : in_logo} alt="Linkedin logo" />
          <p>linkedin.com/in/mathieu-p-26593498/</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;