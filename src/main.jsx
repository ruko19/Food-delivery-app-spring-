import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Router } from "./Router"
import "./index.css"
import { AuthProvider } from './context/authContex'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(



  <AuthProvider  >

    <QueryClientProvider client={queryClient}>

      <Router >

        <App />,


      </Router>

    </QueryClientProvider>




  </AuthProvider >
)
