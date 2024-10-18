import React from 'react'
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import AiOrderingSolutions from './AiOrderingSolutions';
import POSIntegrations from './POSIntegrations';

const ServicesInner = ({sData}) => {

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  }

  const {slugS} = useParams();
    const singleService = sData.find(s => generateSlug(s.title) === slugS)    
    if(!singleService) {
        <LazyLoad height={200} offset={300}>
            return <div>Not found</div>
        </LazyLoad>
    }
   
      return (
        <>
        {slugS === 'ai-ordering-solutions' && (
          <AiOrderingSolutions />
        )}

        {slugS === 'pos-integrations' && (
          <POSIntegrations />
        )}
          
          {/* <div className='md:block md:max-w-6xl mx-auto items-center pl-8 bg-orange-500'>
              <div className='flex flex-col md:space-x-4 md:flex-row justify-center mt-10'>
    
              <div className='flex flex-col md:max-w-lg mt-24'>
                  <h2 className="text-sm md:text-base tracking-wide mb-2 ml-3 md:m-0 font-semibold" style={{color: '#0773B3'}}>
                    Our Services
                  </h2>
                  <h1 className="text-[40px] font-bold text-[#222D35] leading-[40px] mb-3 ml-3 md:m-0">
                    Advanced Call Center Services for your QSR
                  </h1>
    
                  <p className='text-[15px] font-[400] leading-[24px] text-[#666] pt-14'>
                    At Kanekt 365, our technology team understands the need to continually innovate our services for the fast-paced nature of the Quick Service Restaurant (QSR) industry. Our call center clients benefit from three specialized order-taking services that increase their marketing reach.
                  </p>
    
              </div>
    
            </div>  
          </div> */}
    
        </>
      )


 
}

export default ServicesInner
