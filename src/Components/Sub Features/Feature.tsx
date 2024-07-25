import React from 'react'

type FeatureProps = {
  img: string,
  h: string,
  p: string
}


function Feature({img, h, p}: FeatureProps) {
  return (
    <div className='flex px-9 mt-12 text-left'>
      <div className='mt-12 w-9'>
        <img src={img} alt=""/>
      </div>
      <div className='flex-1 pl-12'>
        <h3 className='text-green m-plus-bold text-2xl'>{h}</h3>
        <br></br>
        <p className='font-inter text-xl text-white leading-6'>{p}</p>
      </div>
    </div>

  )
}

export default Feature