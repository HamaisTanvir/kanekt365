import React from 'react'
import kanekt365BenefitsMin from '../assets/kanekt365BenefitsMin.png'
import { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';

const CustomerSatisfaction = () => {

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
    <div className='md:block md:max-w-6xl mx-auto items-center'>
        <div className='flex flex-col md:space-x-12 md:flex-row justify-center md:mt-10'>
     
          <div className="relative w-full md:w-3/6 px-5 md:px-0">
            <img
              src={kanekt365BenefitsMin}
              alt="Video Thumbnail"
              className="cursor-pointer w-full rounded-lg"
              onClick={handleOpen}
            />
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

        <div className='flex flex-col pt-5 md:pt-32'>
            <h2 className="text-sm md:text-base tracking-wide mt-4 md:mt-0 mb-2 font-semibold px-6 md:px-0"
              style={{color: '#0773B3'}}>
              Benefits of A Restaurant Call Center
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 px-6 md:px-0" style={{color: '#222D35'}}>
              IMPROVE CUSTOMER SATISFACTION
            </h1>
            <p className='text-sm leading-6 pt-10 md:max-w-xl px-6 md:px-0 md:pr-8' style={{color: '#282d47'}}>
              Kanekt 365 Call Center Services allow you to focus on growing your business while we provide 
              restaurant automation and order taking for all your incoming calls. Sign up with Kanekt 365 
              and see a significant increase in your QSR daily sales.
            </p>

        </div>
      </div>  
    </div>
  )
}

export default CustomerSatisfaction
