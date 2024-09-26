import React from 'react'
// import { blogsMainPosts } from '../constants'
import blogsBg from '../assets/blogsBg.jpg'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import { Skeleton } from '@mui/material';

const BlogsMain = () => {

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  }

  const baseUrl = 'https://test.kanekt365.com/api/blogs/all';
    const [kanektBlogData, setKanektBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(baseUrl)
        .then(res => {
            setKanektBlogData(res.data);
            setLoading(false);
            // const data = res.data
            // console.log(data);
        })
        // .catch(err => console.error('error:', err));
        .catch(err => {
          console.error('Error fetching data:', err);
          setLoading(false); 
    })
    }, []);
    
    const IconRead = () => (
      <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" strokeWidth='36' width="16px" fill="#821246" stroke='#821246'>
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
      </svg>
    )

  return (
    <div>
      <div className='pt-36 pb-16 text-white'
      style={{
          backgroundImage: `url(${blogsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'}}>

       <div className='hidden md:block'>
         <h1 className="mt-1 text-[40px] font-bold text-white text-center">
            Blogs
         </h1>
         <h2 className="text-[15px] mt-2 font-[400] text-white text-center px-24 leading-7">
            Every month Kanekt 365 publishes at least two restaurant automation blogs. If you want to be reminded 
            to come back here sign up on our social media pages for a reminder when our QSR support artices are
            published. We are proud to be industry leaders and for that reason we are proud to share QSR Trends
            and food service tips that help QSRs increase profits and reduce costs. Come back often to our 
            restaurant automation blogs.
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
                 BLOGS
            </h2>
          </Breadcrumbs>
        </div>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10 mx-auto'>
                {/* Show placeholder while loading */}
                {loading ? (
                    Array(6).fill().map((_, index) => (
                        <div key={index} className="px-4 py-5">
                            <Skeleton variant="rectangular" width="100%" height={250} />
                            <Skeleton variant="text" height={50} />
                            <Skeleton variant="text" height={30} />
                        </div>
                    ))
                ) : (
                    kanektBlogData.map((mainPost, index) => (
                        <div key={index} className="px-4 py-5">
                          <div className="relative border-[1px] border-[#dee4e9] h-[400px] pl-6 bg-white rounded-r-none rounded-3xl overflow-hidden 
                          hover:shadow-lg transition duration-500 ease-out flex flex-col">
                            <LazyLoad height={200} offset={300}>
                                <img
                                    src={`data:image/jpeg;base64,${mainPost.photoPath}`}
                                    alt={mainPost.title}
                                    className='w-96 h-48 rounded-r-none rounded-tl-none rounded-3xl object-cover'
                                />
                            </LazyLoad>

                            <Link to={`/${generateSlug(mainPost.title)}`}>
                              <h1 className="p-6 text-[20px] text-[#0773b3] font-bold text-left leading-7">
                                {mainPost.title}
                              </h1>
                            </Link>

                            <div className='flex justify-left pt-6 pb-8 px-6 mt-auto'>
                                {/* <h2 className='text-[13px] text-[#0773b3] font-bold leading-8'>{mainPost.content}</h2> */}
                                <p className='px-1 pt-1 text-[#666] text-[15px] line-clamp-3' dangerouslySetInnerHTML={{ __html: mainPost.content }}></p>
                                <p className='text-[13px] text-[#0773b3] font-bold leading-8'>Read More</p>
                                <p className='px-2 pt-2'><IconRead/></p>
                            </div>
                        </div>
                      </div>
                    ))
                )}
            </div>
    </div>
  )
}

export default BlogsMain