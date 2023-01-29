// REACT IMPORT
import React from 'react'

// REACT-DOM IMPORT
import ReactDOM from 'react-dom'

// REACT-ROUTER-DOM IMPORTS
import { BrowserRouter as Router } from 'react-router-dom'

// APP IMPORT
import App from './App'

// STYLES IMPORT
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
