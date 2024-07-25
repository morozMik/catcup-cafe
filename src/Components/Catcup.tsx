import React from 'react'

function Catcup() {
  return (
    <div className= 'text-left bg-no-repeat bg-cover bg-[url(./public/Pngs/catbg.png)]'>
      <h1 className='leading-relaxed text-white m-plus-bold text-4xl ml-8 pt-20 w-4/5' >
        Enjoy your coffee with your feline friends at 
        <br/>
        <span className='text-green-light'>Catcup</span></h1>
        <div className='flex gap-3 flex-row-reverse mr-32 pb-16'>
          <button className='text-green font-inter text-lg py-3 px-6'>
              More menu
          </button>
          <button className='text-green bg-gray py-3 px-8 font-inter text-lg rounded-lg'>
            Get visit now
          </button> 
        </div>
    </div>
  )
}

export default Catcup