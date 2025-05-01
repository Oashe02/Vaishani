import React from 'react'
import HowToBook from '../components/HowtoBook';
import GoogleReviews from '../components/GoogleReviews'
import WhyBookUs from '../components/WhyToBook';
import Ambulance from '../components/Ambulance'
import Banner from '../components/Banner'

export default function HomePage() {
  return (
    <div>
      <Banner/>
        <Ambulance/>
        <WhyBookUs/>
       <div className="flex justify-center items-center w-full h-[150px] bg-black pt-30 pb-25 p-4 md:text-6xl text-4xl">
        <h1 className="bg-black text-white font-['Montserrat']">
          We're specialized in providing a high quality service
        </h1>
       </div>
       <GoogleReviews/>
        <div className="bg-black w-full h-30"></div>
        <HowToBook/> 
    </div>
  )
}
