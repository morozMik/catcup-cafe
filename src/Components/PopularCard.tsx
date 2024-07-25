import React from 'react'
import cup from '../../public/Pngs/coffecup.png'
import star from '../../public/Svgs/star.svg'
import '../App.css' 
function PopularCard() {
  return (
    <div className='flex-1 bg-white rounded-lg w-48 h-60 card-shadow'>
            <div>
              <div className='mt-2 flex justify-center'>
                <img src={cup} className='rounded-xl w-44'/>
              </div>
              <div className='bg-gray rounded-md w-16 mt-3 h-fit ml-2 flex gap-2 justify-center'>
                <span className=' font-bold font-poppins text-white text-sm'>4.8</span>
                <img src={star} alt="" className=''/>
              </div>
              <div className='flex justify-between px-2 mt-2'>
                <div className='text-left'>
                  <span className='font-inter text-base'>Cappurcino</span>
                </div>
                <div className='text-right'>
                  <span className='font-inter text-base text-end'>4$</span>
                </div>
              </div>
            </div>
    </div>
  )
}

export default PopularCard