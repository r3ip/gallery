import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App'
import './index.css'
import { Footer } from './components/Footer'
import { Nav } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      {/* <App /> */}
    <Gallery />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
