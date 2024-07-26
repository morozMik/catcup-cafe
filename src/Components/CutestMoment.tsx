import React, { useState } from 'react'
import cat from '../../public/Pngs/cat-carousel.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows/ArrowSamples';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CutestMoment() {

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(index + 1);
  };

  const prev = () => {
    setIndex(index - 1);
  };

  return (
    <div className='mt-32'>
      <h2 className='ml-8 text-left m-plus-bold tracking-widest text-3xl text-green-light'>
        Cutest moment
      </h2>
      <div className='relative'>
        <button className='absolute 
         h-5 text-white mt-44 ml-3 left-0 border px-1 pb-5 pt-1 justify-center items-center border-white'
         onClick={prev}>
          <FaChevronLeft/>
        </button>
        <button className='absolute 
         h-5 text-white mt-44 mr-3 right-0 border px-1 pb-5 pt-1 justify-center items-center border-white'
         onClick={next}>
          <FaChevronRight/>
        </button>
        <Carousel className='h-72 mx-16 mt-8 rounded-3xl' showArrows={false} showThumbs={false} infiniteLoop={true} 
            selectedItem={index} onChange={setIndex}>
          <div>
            <img src={cat} alt="" />
          </div>
          <div>
            <img src={cat} alt="" />
          </div><div>
            <img src={cat} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CutestMoment