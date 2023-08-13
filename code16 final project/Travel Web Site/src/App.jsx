import { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact' 
import Footer from './components/Footer'
import './App.css'
import BookNow from './pages/BookNow'


function App() {

  return (
    <>
     <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path='/BookNow' element={<BookNow />} />
      </Routes>
      <Footer />
     </div>
    </>
   
  )
}

export default App
