import React from 'react'
import cat from '../../public/Pngs/cat-carousel.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows/ArrowSamples';


function CutestMoment() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='mt-32'>
      <h2 className='ml-8 text-left m-plus-bold tracking-widest text-3xl text-green-light'>
        Cutest moment
      </h2>
      <Slider className='h-72 mx-16 mt-8' {...settings}>
      <div>
        <img src={cat} alt="" />
      </div>
      <div>
        <img src={cat} alt="" />
      </div><div>
        <img src={cat} alt="" />
      </div>
    </Slider>
    </div>
  )
}

export default CutestMoment