import React from 'react'
import PopularCard from './PopularCard'



function Popular() {
  return (
    <div className='px-4 relative'>
      <h2 className='p-4 text-left m-plus-bold text-3xl text-green-light'>Popular Now</h2>
      <div className=''>
        <div className='flex justify-between mt-32 gap-8 w-full px-8 absolute left-0 top-0'>
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
        </div>
        <div className='bg-green h-36 mt-44 rounded-lg '></div>
      </div>
    </div>
  )
}





export default Popular