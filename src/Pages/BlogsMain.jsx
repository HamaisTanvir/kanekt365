import React from 'react'
import { blogsMainPosts } from '../constants'
import blogsBg from '../assets/blogsBg.jpg'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'

const BlogsMain = () => {
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

    <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl px-8 mt-10 mx-auto'>
    {blogsMainPosts.map((post, index) => (
        <div key={index} className="p-1">
          <div className="border-2 border-gray-100 p-2 max-h-96 bg-white rounded-lg overflow-hidden 
            hover:shadow-lg transition duration-500 ease-out">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg"/>

            <div className='flex justify-center mt-[-24px]'>
              <div className='flex justify-center text-[13px] w-72 h-12 rounded-lg bg-white gap-2 items-center mx-auto'>
                <p>{post.iconD}</p>
                <h2>{post.date}</h2>
                  &#x2022;
                <p>{post.iconC}</p>
                <h2>{post.comments}</h2>
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-[24px] font-bold text-center leading-8">{post.title}</h1>
              {/* <p className="text-gray-700">{post.description}</p> */}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BlogsMain