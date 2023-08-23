import { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Delivery from './pages/Delivery'
import './App.css'
import ProductDetails from './pages/ProductDetails'



function App() {


  return (
    <>
     <Nav />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
      <Route path='/delivery' element={<Delivery />}/>
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
