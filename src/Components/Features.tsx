import React from 'react'
import Feature from './Sub Features/Feature'
import meet from '../../public/Svgs/Features/meet.svg'
import holding from '../../public/Svgs/Features/holding.svg'
import decor from '../../public/Svgs/Features/decor.svg'
function Features() {
  return (
    <div className='mt-32'>
      <h2 className='m-plus-bold text-3xl text-green-light text-left ml-8'>
        Our features
      </h2>
      <Feature img={meet} h='Meetings with our little friends' p='Spend quiet afternoon with our cats whilst indulging in classic British tea time treat, or start your evening off on good note with one of our unique cat-themed cocktails.'/>
      <Feature img={holding} h='Holding events and holidays together with us' p="We offer a variety of service types including Cream Tea, Happy Hour (or should we say Meower?) Birthday-themed bookings and more! It's our pleasure to help make your occasion extra special"/>
      <Feature img={decor} h='Wonderful and unusual decor' p='A visit to Catcup’s is a quintessential part of an East part of city day out! Our weird and wonderful decor, delightful cats and friendly team will ensure that you have a one-of-a-kind experience to remember.'/>
    </div>
  )
}

export default Features