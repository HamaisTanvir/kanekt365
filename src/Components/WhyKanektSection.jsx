import React from 'react'
import video2 from "../assets/video2.mp4";
import BasicTabs from './BasicTabs';

const WhyKanektSection = () => {
  return (
    <div className='md:max-w-6xl mx-auto items-center '>
        <div className='flex flex-col md:space-x-24  md:flex-row justify-center mt-10'>
            <video className='rounded-lg w-5/12 h-32 md:h-96 my-4 border border-blue-800 controls'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support it
            </video>
            
          <div className='flex flex-col max-w-sm md:max-w-xl mt-3'>
              <h2 className="text-md tracking-wide mb-2 font-semibold" style={{color: '#0773B3'}}>
              Restaurant Call Center Services
              </h2>
              <h1 className="text-3xl md:text-3xl font-bold md:max-w-2xl" style={{color: '#222D35'}}>
              WHY KANEKT 365’S CALL CENTER?
              </h1>
             <div className='text-center mt-5 '>
                <BasicTabs />
             <div className='mt-10 text-start'>
                <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
             </div>
          </div>

        </div>
      </div>  
    </div>

    // <div className="grid grid-cols-6">

    // </div>

  )
}

export default WhyKanektSection
