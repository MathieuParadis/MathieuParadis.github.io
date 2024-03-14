// TYPES IMPORTS
import { type RouteType } from '../types/routeTypes'

export const routesObject: { [key: string | number | symbol]: RouteType } = {
  home: {
    id: '0',
    title: 'Home',
    path: '/'
  },
  projects: {
    id: '1',
    title: 'Projects',
    path: '/projects'
  },
  designs: {
    id: '2',
    title: 'Designs',
    path: '/designs'
  },
  resume: {
    id: '3',
    title: 'Resume',
    path: '/resume'
  },
  contact: {
    id: '4',
    title: 'Contact',
    path: '/contact'
  }
}

export const routes: RouteType[] = [
  routesObject.home,
  routesObject.projects,
  routesObject.designs,
  routesObject.resume,
  routesObject.contact
]
