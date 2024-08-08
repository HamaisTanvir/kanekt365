import React from 'react'
import { SocialIcon } from 'react-social-icons'
// import {Phone, Mail} from 'lucide-react'
// import {Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram} from 'lucide-react'

const TopBar = () => {
  return (
    <div className='sticky hidden lg:flex h-14' style={{backgroundColor: '#f6931e'}}>
        <div className="container flex justify-between items-center mx-auto">
            <div className='flex space-x-8 ml-4'>

              <span className='flex space-x-4 text-sm text-white items-center'> 
                {/* <Phone size={16}/>  <h1>Make a call: (833) 346-3446 </h1>  */}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="white" stroke="none">
                  <path d="M1125 5102 c-74 -28 -103 -48 -264 -184 -190 -160 -251 -218 -321
                  -303 -217 -265 -336 -571 -359 -923 -20 -310 33 -610 170 -972 48 -126 213
                  -446 308 -598 378 -605 983 -1260 1501 -1628 736 -521 1464 -632 2083 -317
                  135 69 232 138 389 278 247 220 289 273 307 384 29 182 -82 337 -479 675 -282
                  241 -466 336 -642 336 -170 -1 -272 -62 -556 -333 -78 -75 -157 -142 -183
                  -154 -223 -110 -518 24 -899 406 -282 283 -532 606 -654 844 -115 226 -139
                  398 -73 539 29 62 74 110 177 186 101 75 290 242 334 295 19 24 50 74 67 111
                  26 57 33 84 37 160 6 121 -19 221 -97 382 -67 139 -249 431 -350 561 -175 226
                  -342 312 -496 255z"/>
                  </g>
                </svg>
                  <a className='font-normal' href="tel:(833) 346-3446">Make a call: (833) 346-3446</a>
              </span>

              <span className='flex space-x-4 text-sm text-white items-center'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="white" stroke="none">
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
                  <a className='font-normal' href='mailto:info@kanekt365.com'>Email: info@kanekt365.com</a>
                </span>
              </div>

            <div className='flex space-x-4 mr-16'>
              <SocialIcon url='https://www.facebook.com/kanekt365/' fgColor='white' bgColor='none' 
              style={{width: '34px', height: '34px'}} />
              <SocialIcon url='https://x.com/i/flow/login?redirect_after_login=%2Fkanekt365%2F' fgColor='white' bgColor='none'
              style={{width: '34px', height: '34px'}} />
              <SocialIcon url='https://www.linkedin.com/company/kanekt365' fgColor='white' bgColor='none' 
              style={{width: '34px', height: '34px'}} />
              <SocialIcon url='https://www.youtube.com/channel/UCRSAYDt4-hSOmnVLEGNYNkA/featured?view_as=subscriber'
              fgColor='white' bgColor='none' style={{width: '34px', height: '34px'}} />
              <SocialIcon url='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fkanekt365%2F&is_from_rle' 
              fgColor='white' bgColor='none' style={{width: '34px', height: '34px'}} />
            </div>
            {/* <div className=' flex space-x-8 mr-20'>
              <Facebook fill='white' size={20} className='text-white' />
              <Twitter fill='white' size={20} className='text-white' />
              <Linkedin fill='white' size={20} className='text-white' />
              <Youtube fill='white' size={20} className='text-white' />
              <Instagram fill='white' size={20} className='text-white' />
            </div> */}
        </div>
    </div>
  )
}

export default TopBar