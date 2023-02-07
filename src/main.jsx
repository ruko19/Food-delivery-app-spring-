import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Router } from "./Router"
import "./index.css"
import { AuthProvider } from './context/authContex'


ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthProvider>
    <Router >

      <App />,

    </Router>
  </AuthProvider>
)
