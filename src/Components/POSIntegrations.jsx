import React from 'react'
import blogsBg from '../assets/blogsBg.jpg'
import POSIntegration from '../assets/posIntegration.jpg'
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { Divider } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { logosPOS } from '../constants'

const POSIntegrations = () => {

  const style = {
    // p: 0,
    mt: 4,
    height: '1px',
    width: '85%',
    backgroundColor: '#F2F1F7',
    mx: 'auto',
    // maxWidth: 360,
    borderRadius: 1,
    // border: '1px solid #9e9c9c',
    border: 'none',
  };

  return (
    <>
      <div className='pt-40 pb-36 text-white'
          style={{
              backgroundImage: `url(${blogsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'}}>

        <div className='hidden md:block'>
          <h1 className="mt-1 text-[40px] font-bold text-white text-center">
              POS Integrations
          </h1>
        </div>

          <div className='md:hidden'>
            <h1 className="text-3xl mt-4 font-semibold text-white text-center pt-5 p-2">
              Watch the Kanekt 365 overview video to learn about everything our call centers have to offer and see your ROI!
            </h1>
          </div>

          <div className='mt-5 flex items-center justify-center'>
            <Breadcrumbs>
              <Link to='/' className='flex items-center text-white text-sm font-semibold'>
                  HOME <span className='px-4 text-[#0773b3] text-[24px]'>&#x2022;</span>
              </Link>
            </Breadcrumbs>
            <Breadcrumbs>
              <Link to='/service' className='flex items-center text-white text-sm font-semibold'>
                  SERVICE <span className='px-4 text-[#0773b3] text-[24px]'>&#x2022;</span>
              </Link>
            </Breadcrumbs>  
            <Breadcrumbs>
              <h2 className='flex items-center text-white text-sm font-semibold'>
                  POS INTEGRATIONS
              </h2>
            </Breadcrumbs>
          </div>
      </div>
             {/* <-------------------------------------> */}
             
      <div className='pt-28 max-w-6xl mx-auto'>
          <h1 className='text-[36px] font-[700] text-[#000] leading-[46px] pb-6'>
            Integration with your POS is vital to business growth.
          </h1>
          <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
            Kanekt 365’s POS integration services are designed specifically for quick-service restaurants (QSRs), ensuring smooth and efficient operations. Kanekt 365 eliminates manual data entry, minimizes errors, and gains real-time insights into sales and inventory. Our customizable POS solutions are tailored to your QSR’s unique requirements, providing the perfect fit for your restaurant’s operations.
            <br/> <br/> At Kanekt 365, we know the value of integrating with as many POS (Point of Sale) systems as possible. Our team works diligently to continually grow our list.
          </p>
      </div>
            {/* <-------------------------------------> */}

      <Divider sx={style} />

        <div className='flex gap-[350px] justify-center max-w-full pt-[24px]'>
            <div className='flex flex-col p-2 max-w-xl'> 
                  <h1 className='text-[40px] font-[700] text-[#000] leading-[40px] mb-6'>
                      Benefits:
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Efficiency
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Accuracy
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>   
                      Seamless payment processing
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Data Insights
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Increased upsell items
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Enhanced customer experience
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Compliance
                  </h1>
                  <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                      Secure payment processing
                  </h1>

                  <div className='flex mt-5'>
                    <Link to='/' className='py-[16px] px-[14px] border-none rounded-md text-white text-sm font-semibold
                      bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                        NO RISK FREE TRIAL
                    </Link>
                  </div>
                  
            </div> 

            <div className='w-[502px] h-[215px] pt-28 pl-8'>
                <img src={POSIntegration} className='rounded-lg' alt="contact-Us"/> 
            </div>
        </div>
            {/* <-------------------------------------> */}

        <div className='mt-10'>
            <h2 className='text-[15px] font-[600] text-[#0773B3] text-center leading-[26px] mb-1'>
                SYSTEMS
            </h2>
            <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] text-center pb-14'>
                POINT OF SALE
            </h1>
        </div>
       
        <div className='grid grid-cols-1 md:grid-cols-6 max-w-6xl gap-y-3 px-2 mx-auto'>
          {logosPOS.map((logo, index) =>(
            <div key={index} className='flex justify-center'>
              <img 
                style={{border:'solid 1px #DDDDDD'}}
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-[123px] w-[176px] object-contain bg-white shadow-sm border-2 "
              />
            </div>
          ))}

        </div>     
            {/* <-------------------------------------> */}

      <div className='pt-6 max-w-6xl mx-auto'>
          <h1 className='text-[36px] font-[700] text-[#000] text-center leading-[46px] pb-4'>
            Contact us today.
          </h1>
          <p className='text-[15px] font-[400] leading-[26px] text-center text-[#666]'>
            Our team can help you determine which level of AI makes the most sense for you and your customers.
          </p>
      </div>

      <div className='mt-5 flex items-center justify-center'>
        <Link to='/' className='flex items-center py-[16px] px-[14px] border-none rounded-md text-white text-sm font-semibold
          bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
            NO RISK FREE TRIAL
        </Link>
      </div>
            {/* <-------------------------------------> */}
          


            {/* <-------------------------------------> */}

      <Divider sx={style} />      
      <div className='max-w-6xl mx-auto bg-[#f6f6f6] rounded-xl py-10 px-8 mt-10'>  
          <div className='flex space-x-4 items-center'>
              <a href="https://kanekt365.com/service/pos-integrations/" target='blank'>
              <KeyboardArrowLeftIcon sx={{backgroundColor: '#0773b3', color: 'white', borderRadius: '30px', 
              width: '60px', height: '60px', p: '10px', transition: '0.3s ease-out',
              '&:hover': {
                  backgroundColor: '#282D47',
                },
                }} /> </a>
              <a href="https://kanekt365.com/service/pos-integrations/" target='blank'>
                  <h1 className='text-[24px] font-[700] leading-[26px] text-[#282d47]'>POS Integrations</h1> </a>
          </div>  
          
      </div>
    </>
  )
}

export default POSIntegrations
