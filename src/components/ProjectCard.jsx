import React from 'react';

const ProjectCard = (project) => {
  const {title, img} = project
  return (
    <div className="col-12 col-sm-6 col-lg-4 my-3 p-0 px-sm-2 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt={title + " illustration"} />
        </div>
        <div className="flip-card-back">
          <h5>{title}</h5>
          <button>See more</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;