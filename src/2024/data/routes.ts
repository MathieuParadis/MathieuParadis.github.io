// TYPES IMPORTS
import { type RouteType } from '../types/routeTypes'

export const routesObject: { [key: string | number | symbol]: RouteType } = {
  home: {
    id: '0',
    title: 'Home',
    path: '/'
  },
  archive: {
    id: '4',
    title: 'Archive',
    path: '/archive'
  }
}

export const routes: RouteType[] = [
  routesObject.home,
  routesObject.archive
]
