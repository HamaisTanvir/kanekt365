import React from 'react'
import revenue from '../assets/revenue.png'
import callStatus from '../assets/callStatus.png'
import dashboardKpi from '../assets/dashboardKpi.png'
import orderCall from '../assets/orderCall.png'
import csatsMin from '../assets/csatsMin.png'
import LazyLoad from 'react-lazyload'

const HeroSection = () => {
  return (
    <div>
     <div className="flex flex-col items-center mt-6 lg:mt-5">
        <h2 className="text-xl sm:text-3xl lg:text-xl text-center tracking-wide mb-8 font-semibold" style={{color: '#0773B3'}}>
        Increase your QSR's ROI and Reduce Expenses with
        </h2>
        <h2 className="text-3xl sm:text-6xl md:text-6xl text-center tracking-wide font-bold px-8">
        Kanekt 365’s <span style={{color: '#F8931F'}}> Restaurant </span> Automation
        </h2>
        <a href="/" style={{backgroundColor: '#F8931F'}} className='px-5 py-2 mt-8 text-white text-lg font-semibold rounded-md'>Schedule Demo</a>
    </div>
      
      <div className="hidden md:flex mt-10 justify-center space-x-3">
        <div className="flex flex-col mb-20 justify-center space-y-3">
          <LazyLoad height={200} offset={300}>
            <img className='h-1/2w-auto mb-3' src={revenue} alt="revenue" />
            <img className='h-1/2 w-auto' src={callStatus} alt="call-status" />
          </LazyLoad>
        </div>
            <img className='h-1/4 w-2/4' src={dashboardKpi} alt="dashboard-kpi" />
        <div className="flex flex-col mb-20 justify-center space-y-3">
          <LazyLoad height={200} offset={300}>
            <img className='h-1/2 w-auto mb-2' src={orderCall} alt="order-call" />
            <img className='h-1/2 w-auto' src={csatsMin} alt="csats-min" />
          </LazyLoad>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 mr-4 md:mt-0 mt-20 text-center" style={{color: '#0773B3'}}>
          Never Put Another Customer On Hold.
        </h2>

        <div className="flex flex-col mt-10 justify-center text-center space-y-10 px-8 md:space-y-0 md:flex-row md:space-x-28 md:px-32 md:mb-20 ">
          <div className="flex flex-col justify-center">
            <h1 style={{color: '#F8931F'}} className="text-6xl md:text-7xl font-bold mb-4 md:mb-8"> 60% </h1>
            <p className="text-gray-500 text-sm lg:text-md">Of callers wouldn’t wait on hold for more than a minute</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 style={{color: '#F8931F'}} className="text-6xl md:text-7xl font-bold mb-4 md:mb-8 md:px-20"> 187 </h1>
            <p className="text-gray-500 text-sm lg:text-md justify-center md:pb-4">The average restaurant gets 187 calls per day</p>
          </div>        
          <div className="flex flex-col justify-center">
            <h1 style={{color: '#F8931F'}} className="text-6xl md:text-7xl font-bold mb-4 md:mb-8"> 18% </h1>
            <p className="text-gray-500 text-sm lg:text-md">Of orders at quick serve restaurants (QSRs) have issues that customers notice and report</p>
          </div>
      </div>

    </div>
  )
}

export default HeroSection