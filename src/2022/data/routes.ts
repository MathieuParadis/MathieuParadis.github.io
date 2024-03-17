// TYPES IMPORTS
import { type RouteType } from '../types/routeTypes'

export const routesObject: { [key: string | number | symbol]: RouteType } = {
  home: {
    id: '0',
    title: 'Home',
    path: 'archive/2022'
  },
  projects: {
    id: '1',
    title: 'Projects',
    path: '/archive/2022/projects'
  },
  designs: {
    id: '2',
    title: 'Designs',
    path: '/archive/2022/designs'
  },
  resume: {
    id: '3',
    title: 'Resume',
    path: '/archive/2022/resume'
  },
  contact: {
    id: '4',
    title: 'Contact',
    path: '/archive/2022/contact'
  },
  archive: {
    id: '4',
    title: 'Archive',
    path: '/archive'
  }
}

export const routes: RouteType[] = [
  routesObject.home,
  routesObject.projects,
  routesObject.designs,
  routesObject.resume,
  routesObject.contact,
  routesObject.archive
]
