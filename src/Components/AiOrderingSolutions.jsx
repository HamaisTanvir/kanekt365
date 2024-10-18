import React from 'react'
import blogsBg from '../assets/blogsBg.jpg'
import aiOrderingImg from '../assets/aiOrderingImg.jpg'
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { Divider } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const AiOrderingSolutions = () => {

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
              AI Ordering Solutions
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
                  AI ORDERING SOLUTIONS
              </h2>
            </Breadcrumbs>
          </div>
      </div>
             {/* <-------------------------------------> */}
             
      <div className='pt-28 max-w-6xl mx-auto'>
          <h1 className='text-[36px] font-[700] text-[#000] leading-[46px] pb-6'>
            AI order-taking increases revenue. Give it a try!
          </h1>
          <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
            The Kanekt 365 AI-powered system seamlessly integrates into your daily operations, enhancing efficiency, increasing order-taking accuracy, and providing personalized menu recommendations for your customers. Kanekt 365 provides a superior ordering experience that aligns with the fast-paced nature of the QSR industry.
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
                    Efficiency and speed 
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Accuracy
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>   
                    24/7 availability
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Customization
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Personalization for repeat customers
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Reduced wait times
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    ROI
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Data collection
                </h1>
                
          </div> 

          <div className='w-[502px] h-[215px] pt-24'>
              <img src={aiOrderingImg} className='rounded-lg' alt="contact-Us"/> 
          </div>
       </div>

      <Divider sx={style} />
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

export default AiOrderingSolutions
