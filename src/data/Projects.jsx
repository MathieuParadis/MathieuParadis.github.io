// ASSETS IMPORTS
import neo_hunt_screenshot from '../assets/images/projects/neo-hunt.png'
import helping_hand from '../assets/images/projects/helping_hand.png'
import boulder_bike_tour from '../assets/images/projects/boulder_bike_tour.png'
import move_and_groove from '../assets/images/projects/move_and_groove.png'
import movie_festival from '../assets/images/projects/movie_festival.png'
import chalet_and_caviar_screenshot from '../assets/images/projects/chalet_and_caviar.png'
import follownut_screenshot from '../assets/images/projects/follownut.png'
import feedtruck_screenshot from '../assets/images/projects/feedtruck.png'

const projects = [
  {
    title: 'Neo Hunt', 
    img: neo_hunt_screenshot,
    url: 'https://neo-hunt.vercel.app/',
    stack: 'NextJS, TypeScript, Tailwind CSS, graphQL',
    description: 'Neo Hunt is an app displaying popular posts from Product Hunt.',
    isWebsiteURL: true,
  },
  {
    title: 'Helping Hand',
    img: helping_hand,
    url: 'https://github.com/MathieuParadis/helping-hand',
    stack: 'JavaScript, React, Sass, Ruby on Rails, PostgreSQL',
    description: 'Helping Hand is an aid platform that connects people in need to willing volunteers in your community.',
    isWebsiteURL: false
  },
  {
    title: 'Boulder Bike Tour',
    img: boulder_bike_tour,
    url: 'https://github.com/MathieuParadis/boulder-bike-tour',
    stack: 'JavaScript, React, Sass, Ruby on Rails, PostgreSQL',
    description: 'Website for the Boulder Bike Tour, a prestigious bike race taking place in Colorado at the foot of the Rocky Mountains.',
    isWebsiteURL: false
  },
  {
    title: 'Move and Groove',
    img: move_and_groove,
    url: 'https://github.com/MathieuParadis/fitness_tracker',
    stack: 'JavaScript, Ruby, Ruby on Rails, PostgreSQL',
    description: 'Move and Groove is a sport tracking app allowing the user to record his physical activity.',
    isWebsiteURL: false
  },
  {
    title: 'Watch it Outside - Boston edition',
    img: movie_festival,
    url: 'https://mathieuparadis.github.io/Boston_movie_festival/',
    stack: 'HTML, CSS, Javascript',
    description: 'Watch it Outside - Boston edition is an outdoor movie festival taking place in Boston during summer.',
    isWebsiteURL: true
  },
  {
    title: 'Chalet and Caviar',
    img: chalet_and_caviar_screenshot,
    url: 'https://live-chaletsandcaviaraspenagency.pantheonsite.io/',
    stack: 'Wordpress',
    description: 'Chalet and Caviar is an agency proposing luxury chalets for rent and for sales.',
    isWebsiteURL: true
  },
  {
    title: 'FollowNut', 
    img: follownut_screenshot,
    url: 'https://github.com/MathieuParadis/follownut_front',
    stack: 'JavaScript, React, Sass, Ruby on Rails, PostgreSQL',
    description: 'FollowNut is a follow up application for nutritionists and their patients.',
    isWebsiteURL: false
  },
  {
    title: 'Feedtruck', 
    img: feedtruck_screenshot,
    url: 'https://github.com/MathieuParadis/Feedtruck',
    stack: 'JavaScript, Ruby, Ruby on Rails, PostgreSQL',
    description: 'Feedtruck is an application that connects individuals with foodtrucks around their homes in Paris.',
    isWebsiteURL: false
  }
]

export default projects
