import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
