import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from '../constants';

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
          <div className="border-2 border-gray-100 p-2 bg-white rounded-lg overflow-hidden pb-10 
            hover:shadow-lg transition duration-500 ease-out">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg"/>
            <div className="p-6">
              <h1 className="text-[26px] font-bold text-center leading-8 mb-2">{post.title}</h1>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        </div>
      ))}
        </Slider>
    </div>
    
  );
};

export default Blogs;
