import React from 'react'
import HeroSection from './HeroSection';
import Brands from './Brands';
import WhyKanektSection from './WhyKanektSection'
import CounterSection from './CounterSection';
import RestaurantAutomation from './RestaurantAutomation'
import CustomerSatisfaction from './CustomerSatisfaction';
import Kanekt365Help from './Kanekt365Help';
import Kanekt365Process from './Kanekt365Process';

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
        <CustomerSatisfaction />
        <Kanekt365Help />
        <Kanekt365Process />
        
  
    </div>
  )
}

export default Homepage