import React from 'react'

function Popular() {
  return (
    <div className='p-16 relative'>
      <h2 className='text-left m-plus-bold text-7xl text-green-light'>Popular Now</h2>
      <div className=''>
        <div className='flex flex-row mt-16 p-32 gap-16 w-full p-8 h-3/4 absolute left-0 top-32'>
          <div className='bg-white basis-1/3  rounded-lg'></div>
          <div className='bg-white basis-1/3  rounded-lg'></div>
          <div className='bg-white basis-1/3  rounded-lg'></div>
        </div>
        <div className='bg-green h-72 rounded-lg mt-96'></div>
      </div>
    </div>
  )
}





export default Popular