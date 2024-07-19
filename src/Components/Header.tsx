import React from 'react'
import logo from '../../public/Svgs/logo.svg'
import cat from '../../public/Svgs/cat.svg'
import moon from '../../public/Svgs/moon.svg'
import profile from '../../public/Svgs/profile.svg'
import cattree from '../../public/Svgs/cattree.svg'
import paw from '../../public/Svgs/paw.svg'
import location from '../../public/Svgs/location.svg'



function Header() {
  return (
    <div className='p-3 gap-3 flex m-0 w-screen bg-gray'>
      <div>
        <img src={logo} alt="logo SVG" />
      </div>

      <div className='p-3 grow h-10 gap-7 flex justify-center place-items-center my-auto'>
        <img src={cat} alt="cat SVG"/>
        <img src={cattree} alt="cattree SVG" />
        <img src={paw} alt="paw SVG" />
        <img src={location} alt="loc SVG" />  
      </div>

      <div className='flex p-3 gap-7'>
        <img src={moon} alt="moon SVG" />
        <img src={profile} alt="prof SVG" />
      </div>

    </div>
  )
}

export default Header