import React from 'react'
// import CarouselBasicExample from './CarouselBasicExample'
import LogoCloudSlider from './LogoCloudSlider'

const Brands = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-5 pt-10 pb-10 max-w-full" style={{backgroundColor: '#f6f6f6'}} >
        <h2 className="text-xl sm:text-3xl lg:text-lg text-center tracking-wide mb-4 font-semibold" style={{color: '#0773B3'}}>
        Through Our Integration with CHECKMATE
        </h2>
        <h1 className="text-xl sm:text-6xl text-center font-bold px-8" style={{color: '#222D35', fontSize: '33px'}}>
        KANEKT 365’S AI ORDER TAKING INTEGRATES WITH OVER 50 POS SYSTEMS
        </h1>
        {/* <CarouselBasicExample /> */}
       
            <LogoCloudSlider />
     
        
    </div>

    
  )
}

export default Brands