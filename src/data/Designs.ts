// TYPES IMPORTS
import { type DesignType } from '../types/designTypes'

// ASSETS IMPORTS
// LOGOS
import aqueo from '../assets/images/designs/logos/aqueo.svg'
import burger_queen from '../assets/images/designs/logos/burger_queen.png'
import feedtruck from '../assets/images/designs/logos/feedtruck.png'
import pappa_johnny from '../assets/images/designs/logos/pappa_johnny.png'
import salad_bar from '../assets/images/designs/logos/salad_bar.png'
import taco_truck from '../assets/images/designs/logos/taco_truck.png'
import vegan_place from '../assets/images/designs/logos/vegan_place.png'
import we_sushi from '../assets/images/designs/logos/we_sushi.png'

// POSTERS
import flower_market from '../assets/images/designs/posters/flower_market.png'

// ILLUSTRATIONS
import cat from '../assets/images/designs/illustrations/cat.png'
import choco_tart from '../assets/images/designs/illustrations/choco_tart.png'
import donut from '../assets/images/designs/illustrations/donut.png'
import owl from '../assets/images/designs/illustrations/owl.png'
import snail from '../assets/images/designs/illustrations/snail.png'

const logos: DesignType[] = [
  { title: 'Aqueo', alt: 'aqueo' , img: aqueo },
  { title: 'Feedtruck', alt: 'feedtruck', img: feedtruck },
  { title: 'Burger Queen', alt: 'burger_queen', img: burger_queen },
  { title: 'Pappa Johnny', alt: 'pappa_johnny', img: pappa_johnny },
  { title: 'Salad bar', alt: 'salad_bar', img: salad_bar },
  { title: 'Taco Truck', alt: 'taco_truck', img: taco_truck },
  { title: 'Vegan place', alt: 'vegan_place', img: vegan_place },
  { title: 'We sushi', alt: 'we_sushi', img: we_sushi }
]

const posters: DesignType[] = [
  { title: 'Flower Market', alt: 'flower_market', img: flower_market }
]

const illustrations: DesignType[] = [
  { title: 'Cat', alt: 'cat', img: cat },
  { title: 'Choco', alt: 'choco_tart', img: choco_tart },
  { title: 'Blueberry donut', alt: 'donut', img: donut },
  { title: 'Geometric owl', alt: 'owl', img: owl },
  { title: 'Thirsty snail', alt: 'snail', img: snail }
]

export { logos, posters, illustrations}
