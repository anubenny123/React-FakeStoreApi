import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Logout from '../Components/Logout/Logout'
import Product from '../Components/ProductDetails/Product'

function Layout() {
  return (
    <>
    
    <Router>
        <Header/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/products/:id' element={<Product/>}/>
        </Routes>
        <Footer/>
    </Router>
    
    
    </>
  )
}

export default Layout