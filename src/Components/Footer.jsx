import React from 'react'
import { quickLinks, quickLinksRest} from '../constants'
import { Link } from 'react-router-dom'
import footerDotMap from '../assets/footerDotMap.png'
import kanekt365LogoFooter from '../assets/kanekt365LogoFooter.png'
import { SocialIcon } from 'react-social-icons'
import { useState } from 'react'
import { Send } from '@mui/icons-material'
import { Divider } from '@mui/material'
// import SettingsPhoneOutlinedIcon, DraftsOutlinedIcon, LocationOnOutlinedIcon  from '@mui/icons-material/SettingsPhoneOutlined';

const Footer = () => {

  const style = {
    py: 0,
    height: '1px',
    width: '100%',
    backgroundColor: '#323232',
    // maxWidth: 360,
    borderRadius: 1,
    // border: '1px solid #9e9c9c',
    border: 'none',
  };

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email');
      setIsError(true);
    } else {
      setMessage('Successfully subscribed to the newsletter!');
      setIsError(false);
      setEmail('');
    }
  };
  
  return (
    <footer className='mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-4 text-white p-8 gap-0 space-y-4 md:space-y-0 pt-10" style={{backgroundColor: '#212121'}}>
        
        <div className='flex space-x-2 md:pl-10'>
          <SocialIcon url='https://www.facebook.com/kanekt365/' fgColor='black' bgColor='white' 
          style={{width: '43px', height: '43px'}} />
          <SocialIcon url='https://x.com/i/flow/login?redirect_after_login=%2Fkanekt365%2F' fgColor='black' bgColor='white'
          style={{width: '43px', height: '43px'}} />
          <SocialIcon url='https://www.linkedin.com/company/kanekt365' fgColor='black' bgColor='white' 
          style={{width: '43px', height: '43px'}} />
          <SocialIcon url='https://www.youtube.com/channel/UCRSAYDt4-hSOmnVLEGNYNkA/featured?view_as=subscriber'
          fgColor='black' bgColor='white' style={{width: '43px', height: '43px'}} />
          <SocialIcon url='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fkanekt365%2F&is_from_rle' 
          fgColor='black' bgColor='white' style={{width: '43px', height: '43px'}} />
        </div>
        
        <div className='flex space-x-4 md:pl-10'>

          <svg className='pt-2' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="37.000000pt" height="37.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#0773b3" stroke="none">
            <path d="M2770 5102 c-98 -49 -107 -188 -15 -248 14 -9 82 -29 153 -45 214
            -47 320 -82 512 -169 275 -125 519 -298 746 -531 328 -337 543 -741 643 -1210
            27 -127 34 -143 73 -172 63 -46 140 -42 191 11 46 48 49 79 21 215 -200 984
            -945 1798 -1909 2086 -110 33 -322 81 -357 81 -13 0 -39 -8 -58 -18z"/>
            <path d="M839 4801 c-128 -41 -235 -130 -535 -448 -215 -227 -273 -342 -293
            -571 -29 -326 81 -739 324 -1217 102 -202 148 -281 278 -475 490 -734 1133
            -1319 1892 -1723 430 -229 794 -346 1125 -363 234 -13 442 53 598 188 19 16
            134 131 256 257 202 207 225 235 264 312 75 150 76 285 1 439 -41 83 -51 94
            -413 456 -351 352 -375 374 -447 408 -153 72 -310 65 -459 -21 -25 -15 -138
            -118 -252 -231 l-207 -204 -99 53 c-440 232 -1018 814 -1232 1240 l-39 76 192
            194 c205 207 255 269 288 363 44 128 35 250 -28 379 -33 66 -67 103 -407 443
            -387 387 -418 413 -536 448 -72 21 -200 20 -271 -3z m224 -291 c62 -29 709
            -679 736 -740 52 -115 30 -153 -244 -425 -123 -121 -230 -235 -240 -254 -28
            -56 -16 -157 30 -255 129 -274 337 -550 654 -866 261 -261 529 -462 800 -601
            113 -59 128 -64 185 -63 39 0 74 7 96 18 19 10 136 119 260 241 124 122 240
            230 259 240 50 25 138 17 188 -18 71 -49 679 -669 703 -716 29 -58 29 -124 0
            -182 -22 -42 -344 -380 -455 -476 -160 -140 -385 -157 -755 -57 -270 73 -687
            275 -1030 499 -730 478 -1398 1251 -1736 2010 -217 488 -270 862 -156 1095 20
            42 81 110 257 288 145 148 247 243 275 257 56 30 117 31 173 5z"/>
            <path d="M2722 4170 c-68 -42 -92 -132 -52 -197 28 -46 52 -58 173 -88 277
            -68 500 -195 689 -394 179 -187 300 -413 353 -656 21 -94 35 -126 71 -154 81
            -64 211 -17 229 83 15 76 -60 337 -147 510 -223 450 -627 774 -1113 892 -121
            29 -160 30 -203 4z"/>
            </g>
          </svg>

            <div>
              <h2 className='text-base font-light pb-1'>Phone number</h2>
              <a className='text-base font-bold' href="tel:(830) 630-8300">(833) 346-3446</a>
            </div>
        </div>

        <div className='flex space-x-4 mr-0 ml-0 pl-0 pr-0'>
          <svg className='pt-1' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="37.000000pt" height="37.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#0773b3" stroke="none">
            <path d="M2435 4827 c-62 -21 -107 -47 -285 -166 l-165 -111 202 0 202 0 52
            33 c45 28 61 32 119 32 58 0 74 -4 119 -32 l52 -33 202 0 202 0 -175 117
            c-235 156 -259 167 -385 170 -63 2 -115 -2 -140 -10z"/>
            <path d="M1035 4462 c-31 -11 -50 -25 -68 -52 -16 -22 -17 -83 -17 -707 0
            -376 -2 -683 -4 -683 -7 0 -419 261 -434 274 -10 10 26 38 173 134 l185 121 0
            130 c0 72 -2 131 -5 131 -3 0 -153 -97 -334 -216 -216 -141 -332 -224 -340
            -240 -8 -18 -11 -426 -11 -1519 l0 -1493 31 -31 31 -31 2316 0 c2180 0 2318 1
            2338 18 12 9 27 27 33 39 8 16 11 434 11 1512 l0 1491 -32 34 c-29 30 -636
            436 -652 436 -3 0 -6 -59 -6 -131 l0 -130 185 -121 c147 -96 183 -124 173
            -134 -16 -14 -425 -274 -433 -274 -3 0 -5 306 -5 681 0 609 -2 684 -16 708
            -35 60 75 56 -1579 58 -836 0 -1529 -2 -1540 -5z m2915 -905 l0 -683 -579
            -367 -579 -367 -44 20 c-74 32 -177 45 -260 31 -40 -7 -92 -21 -116 -31 l-44
            -20 -579 367 -579 368 0 682 0 683 1390 0 1390 0 0 -683z m-2681 -1010 c469
            -298 854 -546 854 -552 0 -8 -995 -802 -1666 -1331 l-57 -45 0 1235 c0 680 3
            1236 8 1236 4 -1 391 -245 861 -543z m3451 -693 l0 -1236 -42 34 c-24 19 -413
            328 -866 688 -465 368 -820 656 -815 661 13 13 1707 1088 1716 1088 4 1 7
            -555 7 -1235z m-2057 98 c20 -9 443 -339 939 -732 l901 -715 -971 -3 c-535 -1
            -1409 -1 -1943 0 l-971 3 901 715 c496 393 918 723 939 732 23 11 62 17 102
            17 40 0 79 -6 103 -17z"/>
            <path d="M1575 3898 c-51 -27 -60 -84 -20 -123 l24 -25 981 0 981 0 24 25 c40
            40 30 96 -22 123 -30 16 -1939 17 -1968 0z"/>
            <path d="M1551 3374 c-35 -45 -24 -96 26 -122 16 -9 272 -12 987 -12 l964 0
            31 26 c37 31 41 69 10 108 l-20 26 -989 0 -989 0 -20 -26z"/>
            <path d="M1939 2871 c-16 -16 -29 -37 -29 -46 0 -24 27 -72 45 -79 22 -8 1188
            -8 1210 0 18 7 45 55 45 79 0 9 -13 30 -29 46 l-29 29 -592 0 -592 0 -29 -29z"/>
            </g>
          </svg>

            <a className='text-base pt-4' href='mailto:info@kanekt365.com'>info@kanekt365.com</a>
        </div>

        <div className='flex space-x-4 md:space-x-2'>
          <svg className='pt-1' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="37.000000pt" height="37.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#0773b3" stroke="none">
            <path d="M2360 5109 c-202 -23 -396 -80 -585 -173 -376 -185 -656 -466 -835
            -839 -326 -676 -210 -1403 383 -2397 169 -283 326 -517 722 -1075 132 -187
            279 -396 327 -465 90 -131 124 -160 188 -160 64 0 98 29 188 160 48 69 195
            278 327 465 388 546 559 801 724 1079 533 897 674 1550 470 2181 -38 117 -141
            326 -218 440 -368 550 -1033 858 -1691 784z m495 -319 c681 -143 1170 -714
            1202 -1405 16 -333 -84 -701 -317 -1165 -183 -365 -385 -682 -920 -1438 -140
            -199 -257 -361 -260 -361 -3 0 -31 37 -62 82 -31 45 -154 219 -273 387 -236
            332 -471 679 -582 860 -415 676 -601 1199 -580 1635 26 547 334 1023 827 1274
            150 77 311 126 490 151 106 15 361 4 475 -20z"/>
            <path d="M2380 4201 c-339 -74 -601 -323 -691 -656 -18 -65 -22 -107 -22 -225
            0 -118 4 -160 22 -225 88 -324 340 -570 668 -652 103 -26 323 -23 428 6 317
            85 560 329 646 646 18 65 22 107 22 225 0 118 -4 160 -22 225 -86 318 -332
            564 -646 646 -116 30 -294 35 -405 10z m324 -301 c113 -29 190 -73 276 -160
            87 -86 131 -163 160 -276 36 -141 17 -295 -52 -427 -44 -82 -165 -203 -245
            -245 -133 -70 -286 -88 -427 -52 -111 28 -189 73 -276 160 -87 86 -131 162
            -160 276 -36 141 -18 294 52 427 42 80 163 201 245 245 132 70 286 88 427 52z"/>
            </g>
          </svg>

            <div>
              <h2 className='text-base font-light pb-1'>Our Address</h2>
              <p className='text-base font-semibold max-w-64'>585 Union Avenue Suite 7A Laconia New Hampshire, 03246</p>
            </div>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 text-white pt-20 md:pl-12" 
          style={{
          backgroundColor: '#252525', 
          backgroundImage: `url(${footerDotMap})`, 
          backgroundSize: 'auto', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'}}>
        
        <div className='flex flex-col justify-items-center items-center py-8'>
            <img className="h-28 w-32" src={kanekt365LogoFooter} alt="kanekt365Logo"/>
            <h3 className='text-sm font-light md:text-base md:max-w-72 px-1 pt-5 ml-2 md:ml-0'>
              We are a QSR call center located in Laconia, NH, specializing in order taking for the pizza industry.
            </h3>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 ml-2 md:ml-10">Quick Links</h3>
          <div className='flex mb-10 font-light'>
            <ul className='space-y-3'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link className=' pl-2 p-40 md:p-10' to={link.href}> {link.text}</Link>
                  </li>
                ))}
              </ul>
              <ul className='space-y-3'>
                {quickLinksRest.map((link, index) =>(
                  <li key={index}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-bold mb-4 ml-2 md:ml-0'>Help Desk</h3>
        <div className='space-y-1 ml-2 md:ml-0'>
            <h2 className='text-base font-light'>Monday - Thursday</h2>
            <h2 className='text-base font-light'>9am to 3am EST</h2>
            <div className='pt-1'>
              <a className='text-base font-semibold' href="tel:(830) 630-8300">(830) 630-8300</a>
            </div>
            <div>
              <a className='text-base font-semibold' href='mailto:support@kanekt365.com'>support@kanekt365.com</a>
            </div>
        </div>

        <h3 className='text-xl font-bold pt-4 pb-4 ml-2 md:ml-0'>Sales</h3>
        <div className='space-y-1 ml-2 md:ml-0'>
            <h2 className='text-base font-light'>Monday - Friday</h2>
            <h2 className='text-base font-light'>9am to 5pm EST</h2>
            <h2 className='text-base font-light'>Sat-Sun: Closed</h2>
            <h2 className='text-base font-light'>Call Center 24/7/365</h2>
        </div>

      </div>

      <div className='mr-16'>
        <h3 className='text-xl font-bold pb-4 ml-2 md:ml-0'>HeadQuarters</h3>
        <div className='space-y-1 ml-2 md:ml-0'>
            <p className='text-base font-light max-w-36'>585 Union Avenue Suite 7A Laconia New Hampshire, 03246</p>
        </div>  

        {/* <h3 className="text-xl font-bold pt-4 pb-4 ">Our Newsletter</h3>
        <div className='space-y-1'>
            <p className='text-base font-light max-w-53'>Subscribe to Our Newsletter for Latest Updates</p>
        </div>  */}
        {/* <div class="max-w-xl lg:max-w-lg"> */}

        {/* <h3 className="text-xl font-bold pt-8 pb-4" >Our Newsletter</h3>
        <p className="text-base font-light max-w-53 ">Subscribe to Our Newsletter for Latest Updates</p>
        <div className="mt-4 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
          <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div> */}

        <div className='mb-20'>
          <h3 className='text-xl font-bold pt-8 pb-4 ml-2 md:ml-0'>Our Newsletter</h3>
          <p className='text-base font-light max-w-53 pb-4 ml-2 md:ml-0'>Subscribe to Our Newsletter for Latest Updates</p>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 ml-2 md:ml-0 rounded border border-gray-300 text-black flex-1"
              
            />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 text-white p-3 m-1 rounded flex items-center justify-center"
            style={{backgroundColor: '#0773b3'}}
          >
            <Send />
          </button>
          </form>
          {message && (
            <p className={`mt-1 ml-2 md:ml-0 ${isError ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
        </div>

      </div>

    </div>

      <Divider sx={style} />

      <div className='p-6' style={{backgroundColor: '#252525', color: '#9e9c9c'}}>
        <div className='md:flex md:justify-between text-center ml-10 mr-10'>
          <a href="https://kanekt365.com/privacy-policy/" className='text-base font-light' target='blank'>
          Privacy & Policy</a>
          <p className='text-base font-light'>Copyright by kanekt365. All rights reserved.</p>
        </div>
      </div>

  </footer>
  )
}

export default Footer