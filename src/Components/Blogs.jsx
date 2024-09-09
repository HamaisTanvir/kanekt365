import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from '../constants';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='hidden md:block'>
        <Slider {...settings} className='max-w-6xl px-8 mt-10 mx-auto'>
        {blogPosts.map((post, index) => (
        <div key={index} className="p-1">
          <div className="border-2 border-gray-100 p-2 h-[430px] bg-white rounded-lg overflow-hidden 
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
        </Slider>

          <p className="text-[15px] mt-16 font-[400] text-[#282D47] text-center">
            Discover our comprehensive collection of blogs
          </p>
          
         <Link> <h2 href="/" className='text-[15px] text-[#0877b9] font-bold text-center'>
            Click here to explore
          </h2> </Link>

          <div className='mt-6 flex justify-center'>
            <Link to='/' className='py-4 px-10 border-none rounded-md text-white text-[14px] font-semibold
              bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                SIGN UP NOW!
            </Link>
          </div>
    </div>
    
  );
};

export default Blogs;
