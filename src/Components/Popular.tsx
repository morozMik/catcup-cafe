import React from 'react'
import PopularCard from './PopularCard'



function Popular() {
  return (
    <div className='p-16 relative'>
      <h2 className='text-left m-plus-bold text-7xl text-green-light'>Popular Now</h2>
      <div className=''>
        <div className='flex flex-row mt-16 gap-32 w-full p-64 absolute left-0 top-16 items-stretch '>
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
        </div>
        <div className='bg-green h-72 rounded-lg mt-96'></div>
      </div>
    </div>
  )
}





export default Popular