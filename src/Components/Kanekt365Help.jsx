import React from 'react'
import {cardsData} from '../constants'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Kanekt365Help = () => {

  return (
    <div className='mt-6 md:mt-10 pb-2'>
        <h1 className="text-3xl md:text-4xl items-center text-center font-bold py-6 bg-[#f6f6f6] text-[#222D35]">
        Here’s How Kanekt 365 Can Help
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto py-8 md:max-w-6xl max-w-full px-14 md:px-5'>

            {cardsData.map((data) =>(
              <div key={data.id} className='flex'>
                <Card sx={{ maxWidth: 340, height: '295px', m: '15px', borderRadius: '10px', borderBottom: 'solid 4px #F6931E', 
                   backgroundColor : '#0773b3', color: 'whitesmoke', overflow: 'hidden', position: 'relative'}}
                   className="relative group">
                    
                    <div style={{
                      position: 'absolute',
                      top: '-30px',
                      right: '-30px',
                      width: '102px',
                      height: '105px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                    }} />    

                  <div className="absolute bottom-0 left-0 w-full h-[14px] bg-[#F6931E] overflow-hidden
                  group-hover:animate-border-slide"> </div>
                  
                  <CardContent>
                <dt className='flex flex-col mx-4 pt-4 text-left space-y-2'>
                  <h1 className='text-xl leading-6 font-semibold'>{data.title}</h1>
                  <li className='text-sm leading-6 pt-4'>{data.content1}</li>
                  <li className='text-sm'>{data.content2}</li>
                  {data.content3 && <li className='text-sm'>{data.content3}</li>}
                </dt>
                </CardContent>
            </Card>
              </div>
            ))}
            
      </div>
      

    </div>
  )
}

export default Kanekt365Help