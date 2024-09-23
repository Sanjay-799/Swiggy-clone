import React from 'react'
import LandingPage from './suby/Pages/LandingPage'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import ProductMenu from './suby/Components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products/:firmId' element={<ProductMenu/>} />
      </Routes>
      
    </div>
  )
}

export default App