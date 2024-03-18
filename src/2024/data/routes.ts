// TYPES IMPORTS
import { type RouteType } from '../types/routeTypes'

export const routesObject: { [key: string | number | symbol]: RouteType } = {
  home: {
    id: '0',
    title: 'Home',
    path: '/'
  },
  portfolio: {
    id: '0',
    title: 'Portfolio',
    path: '/portfolio'
  },
  resume: {
    id: '0',
    title: 'Resume',
    path: '/resume'
  },
  archive: {
    id: '4',
    title: 'Archive',
    path: '/archive'
  }
}

export const routes: RouteType[] = [
  routesObject.home,
  routesObject.portfolio,
  routesObject.resume,
  routesObject.archive
]
