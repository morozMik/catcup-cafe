import React from 'react'
import cat from '../../public/Pngs/aboutus.png'
function AboutUs() {
  return (
    <div className='bg-green-cat bg-opacity-20 relative mt-32 ml-4 rounded-7xl rounded-lg py-16 h-96'>
      <div className='absolute -top-16 left-0 ml-4 w-80'>
        <img src={cat} alt="about us"/>
      </div>
      <div className='w-1/2 absolute right-0 inset-y-0 text-left mt-5'>
        <h2 className='m-plus-bold text-3xl text-green-light'>
          About us
        </h2>
        <div className='font-inter text-white text-xl font-medium mt-2 pr-12'>
          If you love cats, or want to treat someone else who loves cats you've come to the right place!
        </div>
        <div className='font-inter text-white text-base font-normal mt-2 pr-12'>
          To book your Cat Cafe visit, click the button at the bottom of the page that reads ‘Get visit now’. Then follow the prompts to select a date, time and service that you wish to enjoy.
        </div>
        <div>
          <button className='text-green bg-gray py-3 px-8 font-inter text-lg rounded-lg mt-4'>
            Get visit now
          </button> 
        </div>
      </div>
    </div>
  )
}

export default AboutUs