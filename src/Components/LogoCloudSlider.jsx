import React from 'react'
import {logos} from '../constants'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { logosSettings } from '../constants';
import { Link } from 'react-router-dom';
// import '../index.css'
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// const NextArrow = (props) => {
//   const { style, onClick } = props;
//   return (
//     <div
//       className="slick-next custom-arrow"
//       style={{ ...style, display: 'block', right: '10px', color: '#F8931F', fontSize: '30px' }}
//       onClick={onClick}
//     >
//       {/* ▶ */}
//       <ChevronRight color="#F8931F" size={100} />
//     </div>
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow`}
//       style={{ ...style, display: 'block', left: '10px', color: '#F8931F', fontSize: '30px' }}
//       onClick={onClick}
//     >
//       {/* ◀ */}
//       <ChevronLeft color="#F8931F" size={100} />
//     </div>
//   );
// };



const LogoCloudSlider = () => {

  return (
    <div className='container mx-auto py-8 md:max-w-6xl px-8 sm:px-6'> 
      <Slider {...logosSettings}>
        {logos.map((logo, index) =>(
          <div key={index} className='flex justify-center p-2'>
            <img 
              style={{border:'solid 1px #DDDDDD'}}
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-44 w-full object-contain bg-white shadow-sm border-2 "
            />
          </div>
        ))}
      </Slider>

        <div className='flex flex-col items-center mt-12'>
          <Link to='#' className='text-sm text-[#282d47] mb-12'>
            Explore our full list of supported POS providers &gt;
          </Link>

          <Link to='/' className='flex py-4 px-3 border-none rounded-md text-white text-sm font-semibold
              bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                POS INTEGRATION
            </Link>
        </div>
      

    </div>

          // <div className="">
        
          //     <div style={{columnGap: '15px'}} className="flex mt-10 items-center md:grid-cols-1 sm:grid-cols-7 mx-auto">
          //       <img
          //         alt="rezku"
          //         src={rezku}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-white shadow-sm border-2 "
          //       />
          //       <img
          //         alt="hunger-rush"
          //         src={hungerRush}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
          //       />
          //       <img
          //         alt="revel"
          //         src={revel}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
          //       />
          //       <img
          //         alt="par-sale"
          //         src={parSale}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
          //       />
          //        <img
          //         alt="spot-on"
          //         src={spotOn}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-white shadow-sm border-2"
          //       />
          //        <img
          //         alt="micros-simphony"
          //         src={microsSimphony}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
          //       />
          //       <img
          //         alt="micros-res"
          //         src={microsRes}
          //         width={158}
          //         height={48}
          //         style={{border: 'solid 1px #DDDDDD'}}
          //         className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
          //       />
          //       {/* <img
          //         alt="Statamic"
          //         src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
          //         width={158}
          //         height={48}
          //         className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          //       /> */}
    
          //     </div>
          //     <h2 className="text-center text-md leading-8 text-gray-900 pt-10">
          //     Explore our full list of supported POS providers 
          //     </h2>
          //    <div className='text-center mt-10'>
          //     <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
          //    </div>

          // </div>
          //   <div className="overflow-x-auto whitespace-nowrap py-4"> </div>
        )
      }

export default LogoCloudSlider