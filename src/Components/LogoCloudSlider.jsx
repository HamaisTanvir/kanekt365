import React from 'react'
import rezku from '../assets/rezku.png'
import hungerRush from '../assets/hungerRush.png'
import revel from '../assets/revel.png'
import parSale from '../assets/parSale.png'
import spotOn from '../assets/spotOn.png'
import microsSimphony from '../assets/microsSimphony.png'
import microsRes from '../assets/microsRes.png'

const LogoCloudSlider = () => {
  return (
          <div className="py-16 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Trusted by the world’s most innovative teams
              </h2> */}
              <div style={{columnGap: '15px'}} className="flex animate-loop-scroll mx-auto mt-10  max-w-lg grid-cols-4 items-center  gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
                <img
                  alt="rezku"
                  src={rezku}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-white shadow-sm border-2 "
                />
                <img
                  alt="hunger-rush"
                  src={hungerRush}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
                />
                <img
                  alt="revel"
                  src={revel}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
                />
                <img
                  alt="par-sale"
                  src={parSale}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
                />
                 <img
                  alt="spot-on"
                  src={spotOn}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-white shadow-sm border-2"
                />
                 <img
                  alt="micros-simphony"
                  src={microsSimphony}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
                />
                <img
                  alt="micros-res"
                  src={microsRes}
                  width={158}
                  height={48}
                  style={{border: 'solid 1px #DDDDDD'}}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-transparent shadow-sm border-2"
                />
                {/* <img
                  alt="Statamic"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                /> */}
    
              </div>
              <h2 className="text-center text-md leading-8 text-gray-900 pt-10">
              Explore our full list of supported POS providers 
              </h2>
             <div className='text-center mt-10'>
              <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3'}} className='py-4 px-3 border-none rounded-md text-white text-sm font-semibold'>POS INTEGRATION</a>
             </div>
            </div>
          </div>
        )
      }

export default LogoCloudSlider