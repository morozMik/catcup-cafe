import React from 'react'
import cup from '../../public/Pngs/coffecup.png'
import star from '../../public/Svgs/star.svg'
function PopularCard() {
  return (
    <div className='flex-1 bg-white rounded-lg text-center p-7'>
            <div className='w-fit ml-auto mr-auto w'>
              <img src={cup} className='rounded-xl'/>
              <div className='bg-gray rounded-xl mt-7 p-1 pl-2 pr-2 text-left mr-auto w-fit flex gap-4'>
                <span className=' font-bold font-poppins text-white text-xl'>4.8</span>
                <img src={star} alt="" className=''/>
              </div>
              <div className='flex justify-between  '>
                <div className='text-left mt-4'>
                  <span className='font-inter text-3xl '>Cappurcino</span>
                </div>
                <div className='text-right mt-4 '>
                  <span className='font-inter text-3xl  text-end'>4$</span>
                </div>
              </div>
            </div>
    </div>
  )
}

export default PopularCard