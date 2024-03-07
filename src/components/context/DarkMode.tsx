import { createContext } from 'react'

const DarkMode = createContext({
  darkMode: true,
  setDarkMode: (): void => {}
})

export default DarkMode
