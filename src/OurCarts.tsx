import React from 'react'
import CatList from './ComponentsOurCats/CatList'
import ReactPaginate from 'react-paginate';
import catsJson from '../cats.json'
function OurCarts() {


const pageCount = catsJson


  return (
    <div className='text-left ml-8'>
      <h1 className='leading-relaxed text-white m-plus-bold text-4xl w-screen'>Our cats</h1>
      <CatList catsJson={catsJson}/>
      
    </div>
  )
}

export default OurCarts