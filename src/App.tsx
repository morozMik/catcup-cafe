import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Catcup from './Components/Catcup'
import Popular from './Components/Popular'
import AboutUs from './Components/AboutUs'
import Features from './Components/Features'
import CutestMoment from './Components/CutestMoment'


function App() {

  return (
    <div className='bg-gray'>
      <Header/>
      <Catcup/>
      <Popular/>
      <AboutUs/>
      <Features/>
      <CutestMoment/>
    </div>
  )
}

export default App
