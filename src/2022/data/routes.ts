// TYPES IMPORTS
import { type RouteType } from '../types/routeTypes'

export const routesObject: { [key: string | number | symbol]: RouteType } = {
  home: {
    id: '0',
    title: 'Home',
    path: '/2022'
  },
  projects: {
    id: '1',
    title: 'Projects',
    path: '/2022/projects'
  },
  designs: {
    id: '2',
    title: 'Designs',
    path: '/2022/designs'
  },
  resume: {
    id: '3',
    title: 'Resume',
    path: '/2022/resume'
  },
  contact: {
    id: '4',
    title: 'Contact',
    path: '/2022/contact'
  }
}

export const routes: RouteType[] = [
  routesObject.home,
  routesObject.projects,
  routesObject.designs,
  routesObject.resume,
  routesObject.contact
]
