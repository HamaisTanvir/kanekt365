import React from 'react'
import servicesModalImg from '../assets/servicesModalImg.png'
import servicesBg from '../assets/servicesBg.jpg'
import { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { cData } from '../constants'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Services = () => {

  const generatesSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    boxShadow: 24,
    height: 380,
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='pt-40 pb-36 text-white'
          style={{
              backgroundImage: `url(${servicesBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'}}>

        <div className='hidden md:block'>
          <h1 className="mt-1 text-[40px] font-bold text-white text-center">
              Our Services
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
              <Link to='//' className='flex items-center text-white text-sm font-semibold'>
                  OUR SERVICES 
              </Link>
            </Breadcrumbs>
          </div>
      </div>

      
      <div className='md:block md:max-w-6xl mx-auto items-center pl-8'>
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

          <div className="relative w-full md:w-8/12">
            <LazyLoad height={200} offset={500}>
              <img
                src={servicesModalImg}
                alt="Video Thumbnail"
                className="cursor-pointer w-full rounded-lg"
                onClick={handleOpen}
              />
              </LazyLoad>
              <IconButton
                onClick={handleOpen}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                }}
              >
                <PlayCircleOutline style={{ fontSize: '120px' }} />
              </IconButton>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="video-modal-title"
              aria-describedby="video-modal-description"
            >
              <Box sx={style}>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  
                  <Close />
                </IconButton>
                
                <div className="relative w-full h-96">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/jPtQy2i8jK0?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Kanekt365 Video"
                  ></iframe>
                </div>
              </Box>
            </Modal>

        </div>  
      </div>

      <div className='flex mx-auto py-8 md:max-w-6xl max-w-full px-14 md:px-5 text-center'>
              {cData.map((data) =>(

                <div key={data.id} className='relative flex mx-auto gap-y-2 '>
                  <Card sx={{ maxWidth: 390, height: '260px', m: '16px', border: '1px solid', borderColor: '#ede8e8', borderRadius: '5px', boxShadow: 'none'}}>
                    <CardContent>
                  <dt className=' mx-2 gap-x-4 py-4 text-xl text-left font-bold leading-6'>
                    {data.icon}

                    <h1 className='text-[28px] leading-7 text-[#282d47] hover:text-[#0773b3] pt-4'> 
                      <Link to={data.href}> {data.title} </Link>
                    </h1>
                  </dt>

                  <dd className='pt-2 ml-2 text-left text-[15px] font-[400] leading-[26px] text-[#666]'>
                    <Link to={data.href}> {data.content} </Link>
                  </dd>
                  
                    </CardContent>
                  </Card>

                  <div className='absolute' style={{ right: '80%', top: '88.7%' }}>
                    <Link to={`/service/${generatesSlug(data.title)}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        width="36px"
                        height="36px"
                        style={{
                          fill: '#0773b3',
                          transition: 'fill 0.2s ease',
                        }}

                        onMouseEnter={(e) => e.currentTarget.style.fill = '#272727'}  //....Eventssss....\\
                        onMouseLeave={(e) => e.currentTarget.style.fill = '#0773b3'}

                      >
                        <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                          <g transform="scale(10.66667,10.66667)">
                            <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10zM16,13h-3v3c0,0.552 -0.448,1 -1,1v0c-0.552,0 -1,-0.448 -1,-1v-3h-3c-0.552,0 -1,-0.448 -1,-1v0c0,-0.552 0.448,-1 1,-1h3v-3c0,-0.552 0.448,-1 1,-1v0c0.552,0 1,0.448 1,1v3h3c0.552,0 1,0.448 1,1v0c0,0.552 -0.448,1 -1,1z"></path>
                          </g>
                        </g>
                      </svg>
                    </Link>
                   
                  </div>

                </div>
              ))}
      </div>

    </>
  )
}

export default Services
