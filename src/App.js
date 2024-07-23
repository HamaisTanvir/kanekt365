import React from 'react'
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Brands from './Components/Brands';
import TopBar from './Components/TopBar';
import WhyKanektSection from './Components/WhyKanektSection'

const App = () => {
  return (
    <div>
      <TopBar />
        <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
      </div>
        <Brands />
        <WhyKanektSection />
    </div>
  )
}

export default App