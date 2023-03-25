import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Header } from './pages/header'
import { Footer } from './pages/footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
