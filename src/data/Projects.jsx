import movie_festival from '../assets/images/projects/movie_festival.png';
import chalet_and_caviar_screenshot from '../assets/images/projects/chalet_and_caviar.png';
import follownut_screenshot from '../assets/images/projects/follownut.png';
import thp_immo_screenshot from '../assets/images/projects/thp_immo.png';
import feedtruck_screenshot from '../assets/images/projects/feedtruck.png';
import gossip_project_screenshot from '../assets/images/projects/gossip_project.png';

const projects = [
  {
    title: "Watch it Outside - Boston edition",
    img: movie_festival,
    url: "https://mathieuparadis.github.io/Boston_movie_festival/",
    stack: "HTML, CSS, Javascript",
    description: "Website for the Watch it Outside - Boston edition, an outdoor movie festival taking place in Boston during summer."
  },
  {
    title: "Chalet and Caviar",
    img: chalet_and_caviar_screenshot,
    url: "https://live-chaletsandcaviaraspenagency.pantheonsite.io/",
    stack: "Wordpress",
    description: "Chalet and Caviar is an agency proposing luxury chalets for rent and for sales."
  },
  {
    title: "FollowNut'", 
    img: follownut_screenshot,
    url: "https://follownut.herokuapp.com/",
    stack: "JavaScript, React, Sass, Ruby on Rails, PostgreSQL",
    description: "FollowNut' is a follow up application for nutritionists and their patients."
  },
  {
    title: "THP immo'", 
    img: thp_immo_screenshot,
    url: "https://thp-renting.herokuapp.com/",
    stack: "JavaScript, React, Sass, Ruby on Rails, PostgreSQL",
    description: "THPimmo is a platform that proposes atypical houses to rent to spend your vacations."
  },
  {
    title: "Feedtruck", 
    img: feedtruck_screenshot,
    url: "https://feedtruck.herokuapp.com/",
    stack: "JavaScript, Ruby, Ruby on Rails, PostgreSQL",
    description: "Feedtruck is an application that connects individuals with foodtrucks around their homes in Paris."
  },
  {
    title: "The Gossip Project", 
    img: gossip_project_screenshot,
    url: "https://gossip-project-mat-edition.herokuapp.com/",
    stack: "Ruby, Ruby on Rails, PostgreSQL",
    description: "The Gossip Project is a service displaying gossips posted by its users."
  },
];

export default projects;