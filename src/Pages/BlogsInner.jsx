import React from 'react'
// import { blogsMainPosts } from '../constants'
import blogsBg from '../assets/blogsBg.jpg'
import { Breadcrumbs } from '@mui/material'
import { Link , useParams } from 'react-router-dom'

const BlogsInner = ({blogs}) => {

    const generateSlug = (title) => {
        return title.toLowerCase().replace(/ /g, '-');
      }

    const {slug} = useParams();
    const singlePost = blogs.find(p => generateSlug(p.title) === slug)
    if(!singlePost) {
        return <div>Not found</div>
    }
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
                The Me Economy and How Call Centers Can Help a QSR
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
    
                <div>
                    <h2>{singlePost.title}</h2>
                </div>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mt-10 mx-auto'>
        {blogs.map((mainPost, index) => (
            <div key={index} className="px-4 py-5">
              <div className="relative border-[1px] border-[#dee4e9] h-[400px] pl-6 bg-white rounded-r-none rounded-3xl overflow-hidden 
                hover:shadow-lg transition duration-500 ease-out flex flex-col">
                    <div className='mt-5 block absolute top-48 left-[0px] w-[3px] h-[26px] bg-[#0773b3]'>
                    </div>
                  <img src={mainPost.image} alt={mainPost.title} className="w-96 h-48 rounded-r-none rounded-tl-none rounded-3xl object-cover"/>
                    <h1 className="p-6 text-[20px] text-[#0773b3] font-bold text-left leading-7">
                        {mainPost.title}
                    </h1>
    
                <div className='flex justify-left pt-6 pb-8 px-6 mt-auto'>
                  <h2 className='text-[13px] text-[#0773b3] font-bold leading-8'>{mainPost.text}</h2>
                  <p className='px-2 pt-2'>{mainPost.icon}</p>
                </div>
    
              </div>
            </div>
          ))}
          </div>
        </div>
  )
}

export default BlogsInner