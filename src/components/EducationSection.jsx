// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import ExperienceComponent from "./ExperienceComponent";

const EducationSection = () => {
  return (
    <div className="work-education-section">
      <h3>EDUCATION</h3>
      <div className="content">
        <ExperienceComponent 
          title="Bachelor's degree in web development" 
          location="OpenClassrooms" 
          date="Nov. 2021 - Jun. 2022" 
          description="Use of front-end libraries and frameworks such as Bootstrap, and ReactJS. Building of sites backend in Ruby. Run SQL queries on databases." 
        />
        <ExperienceComponent 
          title="Web development - Full stack training course" 
          location="The Hacking Project" 
          date="Apr. - Oct. 2021" 
          description="Courses of HTML, CSS, Ruby, Ruby on Rails, JavaScript, and React." 
        />
        <ExperienceComponent 
          title="Engineering degree in Material Sciences" 
          location="Phelma, Grenoble Institute of Technology" 
          date="2012 - 2015" 
          description="Classes in physics, material properties, and advanced techniques of characterization." 
        />
      </div>
    </div>
  );
};

export default EducationSection;
