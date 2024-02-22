// REACT IMPORT
import React from 'react'

// REACT-DOM IMPORT
import ReactDOM from 'react-dom/client'

// REACT-ROUTER-DOM IMPORTS
import { BrowserRouter as Router } from 'react-router-dom'

// APP IMPORT
import App from './App'

// STYLES IMPORT
import './styles/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
