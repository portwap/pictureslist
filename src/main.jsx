import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Copyright from './Copyright'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Copyright />
  </React.StrictMode>,
)
