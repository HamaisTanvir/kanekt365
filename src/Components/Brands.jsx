import React from 'react'
import LogoCloudSlider from './LogoCloudSlider'

const Brands = () => {
  return (
    <div className="items-center mt-6 md:mt-5 pt-10 pb-10 max-w-full" style={{backgroundColor: '#f6f6f6'}} >
        <h2 className="text-md sm:text-sm md:text-lg text-center tracking-wide mb-4 font-semibold" style={{color: '#0773B3'}}>
        Through Our Integration with CHECKMATE
        </h2>
        <h1 className="text-2xl md:text-3xl text-center font-bold px-1 md:px-8" style={{color: '#222D35'}}>
        KANEKT 365’S AI ORDER TAKING INTEGRATES WITH OVER 50 POS SYSTEMS
        </h1>

        <LogoCloudSlider />
    </div>

    
  )
}

export default Brands