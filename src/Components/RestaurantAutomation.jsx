import React from 'react'
import {cardsSettings, cData} from '../constants'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const RestaurantAutomation = () => {

  return (
    <div className='mt-6 md:mt-10 pb-10'>
        <h2 className="text-md sm:text-sm md:text-lg text-center tracking-wide font-semibold" style={{color: '#0773B3'}}>
            What we do
        </h2>
        <h1 className="text-3xl md:text-4xl text-center font-bold px-1 md:px-8 md:pb-12" style={{color: '#222D35'}}>
            OUR RESTAURANT AUTOMATION
        </h1>

        <div className='mx-auto py-8 md:max-w-6xl max-w-full px-14 md:px-5 text-center'>
          <Slider {...cardsSettings}>

            {cData.map((data) =>(
              <div key={data.id} className='flex mx-auto items-center gap-y-2'>
                <Card sx={{ maxWidth: 350, height: '240px', m: '10px',  borderRadius: '10px', boxShadow: "0 4px 12px 0 rgba(0,0,0,.06)" }}>
                  <CardContent>
                <dt className='flex items-center mx-2 gap-x-4 py-3 text-xl text-left font-bold leading-6'>
                  {data.icon}
                  <Link style={{fontFamily: 'Barlow Condensed, sans-serif'}} className='text-[26px] leading-7
                     hover:text-[#0773b3]' 
                    to={data.href}>{data.title} </Link>
                </dt>
                <dd className='my-4 text-left'>
                  <Link to={data.href}>{data.content} </Link>
                </dd>
                </CardContent>
            </Card>
              </div>
            ))}

          </Slider>
        </div>
      

    </div>
  )
}

export default RestaurantAutomation