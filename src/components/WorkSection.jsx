// REACT IMPORT
import React from 'react'

// COMPONENTS IMPORTS
import ExperienceComponent from './ExperienceComponent'

const WorkSection = () => {
  return (
    <div className='work-education-section'>
      <h3>WORK EXPERIENCE</h3>
      <div className='content'>
        <ExperienceComponent 
          title='Frontend developer' 
          location='Vanyu-Fuji' 
          date='Aug. 2022 - Present' 
          description='Developed web applications using React and Redux. Implemented responsive designs. Utilized Git for version control. Wrote efficient code and improved past projects through troubleshooting and refactoring.'   
        />
        <ExperienceComponent 
          title='Project Manager' 
          location='Meiyume' 
          date='Aug. 2017 - Jul. 2020' 
          description='Handled merchandising duties from quotation, schedule, sampling development, and mass production till shipment. Managed project progress, analyzed risks, coordinated the different parties and adapted resources as required.' 
        />
        <ExperienceComponent 
          title='Supplier Quality Engineer' 
          location='Telenco' 
          date='Nov. 2015 - Jun. 2017' 
          description='Visit and quality control of Asian suppliers. Analysis of non-compliance and development of corrective and preventive actions. Sourcing and development of existing suppliers through audit.'
        />
      </div>
    </div>
  )
}

export default WorkSection
