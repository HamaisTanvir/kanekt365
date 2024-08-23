import React from 'react'
import { Link } from 'react-router-dom'


const ROICalculator = () => {

  return (
      <div className='py-12 text-white bg-[#0e1113] mt-12'>
    
            <h2 className="text-center font-semibold text-[#0773B3] mb-1" >
              Kanekt 365 
            </h2>

            <h1 className="text-[30px] md:text-[40px] text-center font-bold leading-10 mb-12">
              OUR ROI CALCULAOTR
            </h1>

            <h2 className="text-2xl md:text-[24px] px-6 md:px-72 mt-4 font-[400] text-white text-center">
              Increase your QSRs ROI and Reduce Your Expenses by Partnering with Kanekt 365’s Restaurant Automation.
            </h2>

          <div className='mt-6 flex justify-center'>
            <Link to='/' className='py-4 px-10 border-none rounded-md text-white text-[14px] font-semibold
              bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                CALCULATE NOW
            </Link>
          </div>
          <h2 className="text-2xl mt-4 font-normal text-white text-center">
              Yes! Calculate my Savings Now
            </h2>
      
      </div>
  )
}

export default ROICalculator