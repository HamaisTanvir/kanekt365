import React from 'react'
import revenue from '../assets/revenue.png'
import callStatus from '../assets/callStatus.png'
import dashboardKpi from '../assets/dashboardKpi.png'

const HeroSection = () => {
  return (
     <div className="flex flex-col items-center mt-6 lg:mt-5">
        <h2 className="text-xl sm:text-3xl lg:text-xl text-center tracking-wide mb-8 font-semibold" style={{color: '#0773B3'}}>
        Increase your QSR's ROI and Reduce Expenses with
        </h2>
        <h1 className="text-3xl sm:text-6xl lg:text-6xl text-center tracking-wide font-bold px-8">
        Kanekt 365’s <span style={{color: '#F8931F'}}> Restaurant </span> Automation
        </h1>
        <a href="https://hamaistanvir.com" style={{backgroundColor: '#F8931F'}} className='px-5 py-2 mt-8 text-white text-lg font-semibold rounded-md'>Schedule Demo</a>
      
      <div className="flex mt-10 justify-center space-x-3">
        <div className="flex flex-col mb-20 justify-center space-y-3">
            <img className='h-1/2w-auto' src={revenue} alt="revenue" />
            <img className='h-1/2 w-auto' src={callStatus} alt="call-status" />
        </div>
            <img className='h-1/4 w-2/4' src={dashboardKpi} alt="dashboard-kpi" />
        <div className="flex flex-col mb-20 justify-center space-y-3">
            <img className='h-1/2 w-auto' src={revenue} alt="revenue" />
            <img className='h-1/2 w-auto' src={callStatus} alt="call-status" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold mb-8 mr-4 text-center" style={{color: '#0773B3'}}>
          Never Put Another Customer On Hold.
        </h1>
        <div className="flex mt-10 justify-center text-center space-x-28 px-36 ml-6">
          <div className="flex flex-col mb-20 justify-center">
            <h1 style={{color: '#F8931F'}} className="text-7xl font-bold mb-8"> 60% </h1>
            <p className="text-gray-500 lg:text-md">Of callers wouldn’t wait on hold for more than a minute</p>
          </div>
          <div className="flex flex-col mb-20 justify-center">
            <h1 style={{color: '#F8931F'}} className="text-7xl font-bold mb-8 px-14"> 187 </h1>
            <p className="text-gray-500 lg:text-md justify-center pb-4">The average restaurant gets 187 calls per day</p>
          </div>        
          <div className="flex flex-col mb-20 justify-center">
            <h1 style={{color: '#F8931F'}} className="text-7xl font-bold mb-8"> 18% </h1>
            <p className="text-gray-500 lg:text-md">Of orders at quick serve restaurants (QSRs) have issues that customers notice and report</p>
          </div>
      </div>

    </div>
  )
}

export default HeroSection