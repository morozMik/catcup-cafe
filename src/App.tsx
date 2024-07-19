import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Popular from './Components/Popular'



function App() {

  return (
    <div className='bg-gray'>
      <Header/>
      <div className= 'text-left h-screen top-9 bg-no-repeat bg-cover bg-[url(./public/Pngs/catbg.png)]'>
        <h1 className='text-white m-plus-bold text-9xl pl-16 pt-36 w-4/5' >Enjoy your coffee with your feline friends at 
          <br/><span className='text-green-light'> Catcup</span></h1>
      </div>
      <Popular/>
    </div>
  )
}

export default App
