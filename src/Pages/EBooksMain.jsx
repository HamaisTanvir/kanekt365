import React from 'react'
import blogsBg from '../assets/blogsBg.jpg'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import eBooksImage from '../assets/eBooksImage.jpg'

const EBooksMain = () => {
   
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

  const IconRead = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" strokeWidth='36' width="16px" fill="#821246" stroke='#821246'>
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
    </svg>
  )

  const eBookData = [
    {
      title: 'Benefits Of An Exclusive Quick Service Restaurant Call center',
      image: `${eBooksImage}`,
      text: 'Read More',
      icon: <IconRead />,
    }
  ]

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  }

  return (
    <>
      {type === 'e-books' && (  
        <div>
          <div className='pt-36 pb-16 text-white'
          style={{
              backgroundImage: `url(${blogsBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'}}>

          <div className='hidden md:block'>
            <h1 className="mt-1 text-[40px] font-bold text-white text-center">
                Kanekt 365 - E Books
            </h1>
            <h2 className="text-[15px] mt-2 font-[400] text-white text-center px-24 leading-7">
                Welcome to Kanekt 365’s restaurant automation guides Ebook section. Here you will QSR support Ebooks as well as AI phone answering Ebooks. Our Restaurant industry Ebooks are full of trending information and educational material. Download an Ebook that will help your QSR increase profits and reduce labor costs.
            </h2>
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
                <h2 to='/' className='flex items-center text-white text-sm font-semibold'>
                    Kanekt Resources
                </h2>
              </Breadcrumbs>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10 mx-auto'>
        {eBookData.map((mainBook, index) => (
            <div key={index} className="px-4 py-5">
              <div className="relative border-[1px] border-[#dee4e9] h-[400px] pl-6 bg-white rounded-r-none rounded-3xl overflow-hidden 
                hover:shadow-lg transition duration-500 ease-out flex flex-col">
                  
                    <div className='mt-5 block absolute top-48 left-[0px] w-[3px] h-[26px] bg-[#0773b3]'>
                    </div>
                      <img src={mainBook.image} alt={mainBook.title} className="w-96 h-48 rounded-r-none rounded-tl-none rounded-3xl object-cover"/>
                  <Link to={`/resources/${generateSlug(mainBook.title)}/?kkt_pagesource=e-books`} >
                    <h1 className="p-6 text-[20px] text-[#0773b3] font-bold text-left leading-7">
                        {mainBook.title}
                    </h1>
                  </Link>

                <div className='flex justify-left pt-6 pb-8 px-6 mt-auto'>
                  <h2 className='text-[13px] text-[#0773b3] font-bold leading-8'>{mainBook.text}</h2>
                  <p className='px-2 pt-2'>{mainBook.icon}</p>
                </div>

              </div>
            </div>
          ))}
          </div>
        </div>
      )}
    </>
  )
}

export default EBooksMain