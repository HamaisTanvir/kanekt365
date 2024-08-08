import React from 'react'
import HeroSection from './HeroSection';
import Brands from './Brands';
import WhyKanektSection from './WhyKanektSection'
import CounterSection from './CounterSection';
import RestaurantAutomation from './RestaurantAutomation'

const Homepage = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto pt-20 px-6'>
          <HeroSection />
        </div>
        <Brands />
        <WhyKanektSection />
        <CounterSection />
        <RestaurantAutomation />
        
  
    </div>
  )
}

export default Homepage