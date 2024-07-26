import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Catcup from './Components/Catcup'
import Popular from './Components/Popular'
import AboutUs from './Components/AboutUs'
import Features from './Components/Features'
import CutestMoment from './Components/CutestMoment'
import Subscribe from './Components/Subscribe'

function App() {

  return (
    <div className='bg-gray'>
      <Header/>
      <Catcup/>
      <Popular/>
      <AboutUs/>
      <Features/>
      <CutestMoment/>
      <Subscribe/>
    </div>
  )
}

export default App
