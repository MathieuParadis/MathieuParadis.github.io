// TYPES IMPORTS
import {
  type CodingLanguageType,
  type DesignToolType,
  type ExperienceType,
  type SpokenLanguageType
} from '../types/resumeTypes'

// ASSETS IMPORTS
// Coding Languages Assets
import html from '../assets/logos/html.svg'
import html_dark from '../assets/logos/html_dark.svg'
import css from '../assets/logos/css.svg'
import css_dark from '../assets/logos/css_dark.svg'
import js from '../assets/logos/js.svg'
import js_dark from '../assets/logos/js_dark.svg'
import next from '../assets/logos/next.svg'
import next_dark from '../assets/logos/next_dark.svg'
import react from '../assets/logos/react.svg'
import react_dark from '../assets/logos/react_dark.svg'
import ruby from '../assets/logos/ruby.svg'
import ruby_dark from '../assets/logos/ruby_dark.svg'
import rails from '../assets/logos/rails.svg'
import rails_dark from '../assets/logos/rails_dark.svg'
import ts from '../assets/logos/TS.svg'
import ts_dark from '../assets/logos/TS_dark.svg'

// Design Tools Assets
import ai from '../assets/logos/ai.svg'
import ai_dark from '../assets/logos/ai_dark.svg'
import figma from '../assets/logos/figma.svg'
import figma_dark from '../assets/logos/figma_dark.svg'
import ps from '../assets/logos/ps.svg'
import ps_dark from '../assets/logos/ps_dark.svg'

export const workExperiences: ExperienceType[] = [
  {
    title: 'Frontend developer',
    location: 'Vanyu-Fuji',
    date: 'Aug. 2022 - Nov. 2023',
    description: 'Developed web applications using React and Redux. Implemented responsive designs. Utilized Git for version control. Wrote efficient code and improved past projects through troubleshooting and refactoring.'   
  },
  {
    title: 'Project Manager',
    location: 'Meiyume',
    date: 'Aug. 2017 - Jul. 2020',
    description: 'Handled merchandising duties from quotation, schedule, sampling development, and mass production till shipment. Managed project progress, analyzed risks, coordinated the different parties and adapted resources as required.' 
  },
  {
    title: 'Supplier Quality Engineer',
    location: 'Telenco',
    date: 'Nov. 2015 - Jun. 2017',
    description: 'Visit and quality control of Asian suppliers. Analysis of non-compliance and development of corrective and preventive actions. Sourcing and development of existing suppliers through audit.'
  }
]

export const educationExperiences: ExperienceType[] = [
  {
    title: 'Bachelor&rsquo;s degree in web development',
    location: 'OpenClassrooms',
    date: 'Nov. 2021 - Jun. 2022',
    description: 'Use of front-end libraries and frameworks such as Bootstrap, and ReactJS. Building of sites backend in Ruby. Run SQL queries on databases.'
  },
  {
    title: 'Web development - Full stack training course',
    location: 'The Hacking Project',
    date: 'Apr. - Oct. 2021',
    description: 'Courses of HTML, CSS, Ruby, Ruby on Rails, JavaScript, and React.'
  },
  {
    title: 'Engineering degree in Material Sciences',
    location: 'Phelma, Grenoble Institute of Technology',
    date: '2012 - 2015',
    description: 'Classes in physics, material properties, and advanced techniques of characterization.'
  }
]

export const codingLanguages: CodingLanguageType[] = [
  {
    title: 'HTML 5',
    alt: 'HTML5 logo',
    imgLight: html,
    imgDark: html_dark
  },
  {
    title: 'CSS 3',
    alt: 'CSS3 logo',
    imgLight: css,
    imgDark: css_dark
  },
  {
    title: 'JavaScript',
    alt: 'JS logo',
    imgLight: js,
    imgDark: js_dark
  },
  {
    title: 'React JS',
    alt: 'ReactJS logo',
    imgLight: react,
    imgDark: react_dark
  },
  {
    title: 'Next JS',
    alt: 'NextJS logo',
    imgLight: next,
    imgDark: next_dark
  },
  {
    title: 'TypeScript',
    alt: 'TS logo',
    imgLight: ts,
    imgDark: ts_dark
  },
  {
    title: 'Ruby',
    alt: 'Ruby logo',
    imgLight: ruby,
    imgDark: ruby_dark
  },
  {
    title: 'Rails',
    alt: 'Rails logo',
    imgLight: rails,
    imgDark: rails_dark
  }
]

export const designTools: DesignToolType[] = [
  {
    title: 'Illustrator',
    alt: 'Illustrator logo',
    imgLight: ai,
    imgDark: ai_dark
  },
  {
    title: 'Photoshop',
    alt: 'Photoshop logo',
    imgLight: ps,
    imgDark: ps_dark
  },
  {
    title: 'Figma',
    alt: 'Figma logo',
    imgLight: figma,
    imgDark: figma_dark
  }
]

export const spokenLanguages: SpokenLanguageType[] = [
  {
    title: 'French',
    maxRating: 5,
    actualRating: 5
  },
  {
    title: 'English',
    maxRating: 5,
    actualRating: 5
  },
  {
    title: 'Portuguese',
    maxRating: 5,
    actualRating: 2
  },
  {
    title: 'Italian',
    maxRating: 5,
    actualRating: 2
  },
  {
    title: 'Chinese',
    maxRating: 5,
    actualRating: 1
  }
]
