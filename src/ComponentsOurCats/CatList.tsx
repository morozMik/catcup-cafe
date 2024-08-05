import React, { useEffect, useState } from 'react'

type CatListProps = {
  catsJson: object
}


function CatList({catsJson}: CatListProps) {

    // const [allCatsArr, setAllCatsArr] = useState([''])
    // const [imgURls, setImgURls] = useState([''])
    //const allCats = import.meta.glob('../../public/Cats/*.png')
    


    
  
  
  
  const CatListItem = catsJson.cats.map(cat=> {
    
    

    return(
      <div className='ml-7 mr-8 mt-8 bg-white flex py-8 rounded-xl cat-card-shadow' k>
        <div className='w-72 flex-1 mr-5 ml-4'>
        
          <img src={''} alt={`image - }`} className='rounded-lg'/>
        
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