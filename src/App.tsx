import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import HomePage from './HomePage'
import OurCarts from './OurCarts'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='bg-gray'>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path="*"/>
        <Route element={<OurCarts/>} path=":ourcats"/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
