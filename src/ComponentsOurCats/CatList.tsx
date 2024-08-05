import React, { useEffect, useState } from 'react'
import frodo from '../../public/Cats/Frofo.png'
import zora from '../../public/Cats/zora.png'
import sam from '../../public/Cats/sam.png'
import legolas from '../../public/Cats/legolas.png'
import gimli from '../../public/Cats/gimli.png'
import merry from '../../public/Cats/merry.png'
import { log } from 'console'
type CatListProps = {
  catsJson: object
}


function CatList({catsJson}: CatListProps) {

  const images = [zora,sam,frodo,legolas,gimli,merry]
  const CatListItem = catsJson.cats.map((cat, index)=> {
    
    return(
      <div className='ml-7 mr-8 mt-8 bg-white flex py-8 rounded-xl cat-card-shadow' key={index}>
        <div className='w-72 flex-1 mr-5 ml-4'>
        
          <img src={images[cat.id]} alt={`image - }`} className='rounded-lg'/>
        
        </div>
        <div className='flex-1 mr-4'>
          <h3 className='m-plus-bold text-2xl'>{cat.name}</h3>
          <div className='text-base font-inter leading-5 font-normal'>
            {cat.bio}
          </div>
        </div>
      </div>
    )
  })
  
  
  
  return (
    <div className='mt-8'>
      {CatListItem}
    </div>
  )
}

export default CatList