import React from 'react'
import thumbnail from '../assets/kanekt365IntroMin.jpg'
import BasicTabs from './BasicTabs';
import { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';
import AccordionUsage from './MTabs';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const WhyKanektSection = () => {

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
    <div className='md:block md:max-w-6xl mx-auto items-center '>
        <div className='flex flex-col md:space-x-24  md:flex-row justify-center mt-10'>
          {/* const [isPlaying, setIsPlaying] = useState(false);
            <div className="relative w-5/12 h-96 mb-16">
      {!isPlaying ? (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="absolute top-0 left-0 w-full md:h-md object-cover cursor-pointer rounded-lg"
          onClick={() => setIsPlaying(true)}
        />
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/jPtQy2i8jK0?autoplay=0" 
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Kanekt365 Video"
        ></iframe>
      )}
          </div> */}
          <div className="relative w-full md:w-5/12">
          <LazyLoad height={200} offset={500}>
            <img
              src={thumbnail}
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
                color: '#F5A648',
              }}
            >
              <PlayCircleOutline style={{ fontSize: '100px' }} />
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

        <div className='flex flex-col md:max-w-xl mt-3'>
            <h2 className="text-sm md:text-base tracking-wide mt-4 mb-2 ml-3 md:m-0 font-semibold" style={{color: '#0773B3'}}>
              Restaurant Call Center Services
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold md:max-w-2xl mb-3 ml-3 md:m-0" style={{color: '#222D35'}}>
              WHY KANEKT 365’S CALL CENTER?
            </h1>

            <div className='hidden md:block text-center mt-5 '>
              
              <BasicTabs />

              <div className='mt-10 text-start'>
                  <Link to='/' className='py-4 px-3 border-none rounded-md
                  text-white text-sm font-semibold bg-[#0773B3] hover:bg-[#282D47]'>BOOK DEMO - NOW!</Link>
              </div>
            </div>

            <div className='md:hidden p-1'>
              <AccordionUsage />
              <div className='mt-10 text-start'>
                <Link to='/' className='py-4 px-3 border-none rounded-md
                  text-white text-sm font-semibold bg-[#0773B3] hover:bg-[#282D47]'>BOOK DEMO - NOW!
                </Link>
              </div>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default WhyKanektSection
