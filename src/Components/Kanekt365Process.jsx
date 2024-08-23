import React from 'react'
import { Card, CardContent } from '@mui/material'
import { cpData } from '../constants'

const Kanekt365Process = () => {
  return (
    <div className='pb-4 pt-8 bg-[#f6f6f6]'>
      <h2 className="text-[14px] md:text-[15px] text-center font-semibold text-[#0773B3]" >
          How does the restaurant call center work?
      </h2>
      <h1 className="text-[30px] md:text-[40px] text-center font-bold leading-10" style={{color: '#222D35'}}>
          THE KANEKT 365 PROCESS
      </h1>

    <div className='grid grid-cols-1 md:grid-cols-4 mx-auto md:max-w-6xl max-w-full'>
     
        {cpData.map((data) =>(
          <div key={data.id} className='flex mx-auto  '>
            <Card sx={{  background: 'none', boxShadow: 'none'}}>
              <CardContent>
            <dt className='flex items-start gap-x-3 py-5 leading-6'>
              <span className='bg-[#282d47] rounded-full text-center p-3' >
                {data.icon}
              </span>
              <div className='flex flex-col '>
                <h1 className='font-bold text-[26px]'>{data.title} </h1>
                <div className='text-[15px] text-[#282727] font-normal leading-[26px] my-2 '>
                <p>{data.content} </p>
                </div>
              </div>
            </dt>
            
            </CardContent>
        </Card>
          </div>
        ))}

  </div>
</div>
  )
}

export default Kanekt365Process