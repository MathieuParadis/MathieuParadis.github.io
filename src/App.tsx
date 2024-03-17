// REACT IMPORT
import React from 'react'

// REACT-ROUTER-DOM IMPORTS
import { useLocation } from 'react-router-dom'

// APP IMPORTS
import App2022 from './2022/App'
import App2024 from './2024/App'

const App = (): JSX.Element => {
  const location = useLocation()
  return (
    <div className='app'>
      {location.pathname.startsWith('/archive/2022') && <App2022 />}

      {!location.pathname.startsWith('/archive/2022') && <App2024 />}
    </div>
  )
}

export default App
