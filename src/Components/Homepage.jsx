import React from 'react'
import HeroSection from './HeroSection';
import Brands from './Brands';
import WhyKanektSection from './WhyKanektSection'

const Homepage = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto pt-20 px-6'>
          <HeroSection />
        </div>
        <Brands />
        <WhyKanektSection />
        {/* <div className="mt-10">
          <BitrixSignupForm />
        </div> */}
    </div>
  )
}

export default Homepage