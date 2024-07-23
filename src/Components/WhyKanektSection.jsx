import React from 'react'
import video2 from "../assets/video2.mp4";
import {Button} from '@mui/material'

const WhyKanektSection = () => {
  return (
    <div className='max-w-6xl mx-auto mt-10'>
        <div style={{backgroundColor: 'blue'}} className='flex justify-around items-center space-x-4'>

            <video className='rounded-lg w-5/12 h-96 mx-2 my-4 border border-blue-800'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support it
            </video>
          <div className='flex flex-col'>
            <h2 className="text-xl sm:text-3xl lg:text-lg  tracking-wide mb-4 font-semibold" style={{color: '#0773B3'}}>
            Restaurant Call Center Services
            </h2>
            <h1 className="text-xl sm:text-6xl  font-bold" style={{color: '#222D35', fontSize: '33px'}}>
            WHY KANEKT 365’S CALL CENTER?
            </h1>
            <Button variant= 'contained' className='max-w-40 h-12'>MUI Button</Button>
             <div className='text-center mt-10'>
              <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
             </div>
          </div>
        </div>
    </div>
  )
}

export default WhyKanektSection
