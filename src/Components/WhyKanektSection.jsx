import React from 'react'
import thumbnail from '../assets/kanekt365IntroMin.jpg'
import BasicTabs from './BasicTabs';
import { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';

const WhyKanektSection = () => {
  // const [isPlaying, setIsPlaying] = useState(false);

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


    <div className='md:max-w-6xl mx-auto items-center '>
        <div className='flex flex-col md:space-x-24  md:flex-row justify-center mt-10'>
            {/* <video className='rounded-lg w-5/12 h-32 md:h-96 my-4 border border-blue-800 controls'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support it
            </video> */}
            {/* <div className="relative w-5/12 h-96 mb-16">
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
            {/* ====-=====-=========-==========-========== */}  
      {/* <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="cursor-pointer w-76  md:w-5/12 md:h-2xl rounded-lg"
        onClick={handleOpen}
      />
       <IconButton
             onClick={handleOpen}
            //  className="absolute inset-0 m-auto text-orange-500"
             style={{
              position: 'absolute',
              top: '300%',
              left: '30%',
              transform: 'translate(-180%, -50%)',
              color: '#F5A648',
             }}
          >
            <PlayCircleOutline style={{ fontSize: '120px' }} />
          </IconButton> */}
          <div className="relative w-full md:w-5/12">
  <img
    src={thumbnail}
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

          <div className='flex flex-col max-w-sm md:max-w-xl mt-3'>
              <h2 className="text-md tracking-wide mb-2 font-semibold" style={{color: '#0773B3'}}>
              Restaurant Call Center Services
              </h2>
              <h1 className="text-3xl md:text-3xl font-bold md:max-w-2xl" style={{color: '#222D35'}}>
              WHY KANEKT 365’S CALL CENTER?
              </h1>
             <div className='text-center mt-5 '>
                <BasicTabs />
             <div className='mt-10 text-start'>
                <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
             </div>
          </div>

        </div>
      </div>  
    </div>

    // <div className="grid grid-cols-6">

    // </div>

  )
}

export default WhyKanektSection
