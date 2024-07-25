import React from 'react'
import video2 from "../assets/video2.mp4";
<<<<<<< HEAD
=======
import BasicTabs from './BasicTabs';
>>>>>>> kanekt365

const WhyKanektSection = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <div className='flex justify-around items-center space-x-4'>

            <video className='rounded-lg w-5/12 h-96 mx-2 my-4 border border-blue-800'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support it
            </video>
          <div className='flex flex-col max-w-xl'>
            <h2 className="text-xl sm:text-3xl lg:text-lg tracking-wide mb-1 font-semibold" style={{color: '#0773B3'}}>
            Restaurant Call Center Services
            </h2>
            <h1 className="text-lg lg:text-xl sm:text-6xl font-bold max-w-lg" style={{color: '#222D35', fontSize: '33px'}}>
            WHY KANEKT 365’S CALL CENTER?
            </h1>
<<<<<<< HEAD
             <div className='text-center mt-10'>
=======

              <BasicTabs />
             <div className='mt-10'>
>>>>>>> kanekt365
              <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
             </div>
          </div>

        </div>
    </div>
  )
}

export default WhyKanektSection
