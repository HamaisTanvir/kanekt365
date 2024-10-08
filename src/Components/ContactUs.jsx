import React from 'react'
import contactUs from '../assets/contactUs.jpg'
import contactUsImg from '../assets/contactUsImg.png'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ciData } from '../constants'

const ContactUs = () => {

  
  const [emailNews, setEmailNews] = useState('');
  const [messageNews, setMessageNews] = useState('');
  const [isErrorNews, setIsErrorNews] = useState(false);

  const handleSubmitNews = (e) => {
    e.preventDefault();
    if (!emailNews) {
      setMessageNews('Please enter your email');
      setIsErrorNews(true);
    } else {
      setMessage('Successfully subscribed to the newsletter!');
      setIsErrorNews(false);
      setEmail('');
    }
  };
  
  const IconC4 = () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
   preserveAspectRatio="xMidYMid meet">
  
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  fill="#fff" stroke="none">
  <path d="M3621 5103 c-51 -18 -109 -72 -136 -128 -19 -38 -20 -62 -20 -435 0
  -386 0 -396 22 -435 12 -22 36 -54 55 -72 57 -55 98 -66 251 -71 l138 -4 -5
  -27 c-18 -87 -77 -444 -74 -451 2 -5 179 101 393 236 l390 244 117 0 c64 0
  140 5 168 11 69 15 129 62 162 128 l28 55 0 390 c0 358 -2 394 -19 431 -23 51
  -98 118 -149 133 -28 9 -211 12 -658 11 -531 0 -625 -3 -663 -16z m1304 -178
  l25 -24 0 -351 c0 -358 -2 -379 -39 -407 -11 -8 -64 -12 -165 -13 l-150 0
  -258 -161 c-142 -89 -260 -160 -262 -158 -2 2 9 75 24 162 l27 157 -224 0
  -224 0 -24 25 -25 24 0 362 c0 359 0 363 22 386 l21 23 614 0 614 0 24 -25z"/>
  <path d="M3792 4708 l3 -83 493 -3 492 -2 0 85 0 85 -495 0 -496 0 3 -82z"/>
  <path d="M3792 4378 l3 -83 328 -3 327 -2 0 85 0 85 -330 0 -331 0 3 -82z"/>
  <path d="M4620 4375 l0 -85 80 0 80 0 0 85 0 85 -80 0 -80 0 0 -85z"/>
  <path d="M2335 4864 c-103 -11 -296 -48 -392 -75 -391 -110 -733 -309 -1018
  -594 -284 -283 -480 -613 -589 -991 l-33 -117 -73 122 c-40 67 -77 124 -82
  127 -6 4 -108 -50 -137 -72 -3 -3 223 -387 278 -473 7 -10 61 18 247 129 132
  79 240 144 242 145 2 2 -70 127 -82 142 0 1 -48 -27 -106 -62 -58 -36 -108
  -65 -112 -65 -10 0 30 135 77 256 251 648 795 1129 1471 1304 334 86 719 87
  1057 0 l107 -27 24 76 c18 56 21 78 12 83 -21 12 -173 48 -293 69 -91 16 -168
  22 -338 24 -121 2 -238 1 -260 -1z"/>
  <path d="M2395 4283 c-205 -32 -417 -135 -572 -277 -138 -127 -257 -327 -310
  -523 l-27 -98 -1 -410 0 -410 26 -55 c38 -81 82 -126 161 -164 l71 -34 27 -86
  c16 -48 48 -121 72 -163 48 -86 174 -221 250 -268 34 -21 48 -37 48 -52 0 -25
  24 -19 -352 -88 -135 -24 -271 -54 -301 -65 -160 -60 -282 -187 -343 -358 -15
  -43 -30 -80 -34 -84 -3 -5 -72 59 -153 140 -199 201 -200 172 25 399 l173 173
  -305 305 -305 306 -221 -223 c-186 -188 -226 -233 -252 -288 -49 -102 -65
  -178 -60 -294 5 -112 26 -184 80 -272 21 -35 248 -269 657 -677 585 -582 631
  -625 695 -656 180 -85 399 -76 556 23 27 17 153 126 279 241 l230 210 -62 62
  -61 63 882 0 c485 0 882 3 882 8 0 26 -204 612 -231 664 -43 80 -146 183 -224
  225 -83 43 -133 56 -420 108 -332 60 -305 53 -304 78 0 15 23 39 76 77 42 30
  95 78 120 106 l44 52 117 4 c94 3 125 8 157 25 51 27 91 67 119 118 21 40 21
  45 21 630 0 530 -2 598 -18 673 -89 413 -382 723 -787 833 -57 16 -113 21
  -235 24 -88 2 -173 1 -190 -2z m308 -168 c327 -57 602 -289 708 -598 40 -117
  49 -188 49 -399 l0 -186 -40 15 c-39 16 -40 17 -40 65 l0 48 -95 0 c-243 0
  -472 99 -654 284 l-74 75 -88 -83 c-198 -189 -401 -276 -644 -276 l-95 0 0
  -48 c0 -48 -1 -49 -41 -65 l-41 -16 5 232 c5 259 11 292 78 435 120 258 355
  449 620 506 143 30 228 33 352 11z m-78 -988 c130 -107 318 -192 480 -217 44
  -7 86 -14 93 -16 9 -3 12 -62 12 -256 0 -272 -7 -323 -54 -430 l-26 -58 -287
  -2 -288 -3 0 -80 0 -80 215 -5 215 -5 -47 -33 c-71 -49 -163 -90 -246 -108
  -99 -22 -252 -15 -342 15 -203 69 -358 228 -427 436 -25 76 -26 92 -31 339 -5
  283 -6 276 54 276 48 0 212 44 294 80 77 32 251 142 284 179 11 12 23 21 28
  21 5 0 37 -24 73 -53z m-895 -489 l0 -141 -26 24 c-14 13 -32 36 -40 51 -17
  32 -18 111 -3 141 15 28 50 67 61 67 4 0 8 -64 8 -142z m1712 81 c35 -65 20
  -146 -36 -198 l-26 -24 0 142 0 143 22 -14 c12 -8 30 -30 40 -49z m18 -444 c0
  -67 -3 -79 -25 -100 -19 -20 -34 -25 -73 -25 l-49 0 23 68 c13 37 24 74 24 82
  0 13 58 43 93 49 4 0 7 -33 7 -74z m-2580 -460 l-45 -45 -190 190 -189 190 44
  45 45 45 190 -190 190 -190 -45 -45z m-194 -200 c-52 -75 -58 -173 -17 -252
  30 -58 667 -688 716 -709 77 -32 196 -14 250 36 21 19 21 19 210 -171 l190
  -190 -52 -49 c-29 -27 -79 -61 -110 -77 -54 -26 -67 -28 -173 -28 -188 0 -135
  -42 -847 669 -667 666 -649 645 -675 786 -22 118 19 250 109 350 l46 52 189
  -190 190 -189 -26 -38z m1874 42 c81 0 144 6 180 16 30 8 56 14 57 13 1 -1
  -53 -57 -120 -124 l-122 -122 -124 124 -124 124 64 -16 c42 -10 106 -16 189
  -15z m-188 -274 l178 -178 179 179 179 179 314 -57 c253 -46 325 -62 374 -86
  68 -33 130 -88 169 -150 22 -34 155 -406 155 -432 0 -4 -384 -8 -853 -8 l-852
  0 -155 155 c-85 85 -159 155 -163 155 -5 0 -73 -58 -151 -128 -226 -206 -234
  -212 -268 -212 -26 0 -48 17 -133 101 l-103 101 39 115 c44 131 83 198 143
  248 78 63 135 81 441 139 160 29 299 54 310 55 13 1 80 -59 197 -176z m-154
  -890 l-53 -53 -190 190 -190 191 54 50 54 51 188 -188 189 -189 -52 -52z"/>
  <path d="M4576 3558 c-8 -13 -73 -121 -145 -241 l-130 -217 42 -26 c23 -14 52
  -32 64 -40 12 -8 26 -14 30 -14 5 0 39 52 77 116 46 76 72 111 77 102 4 -7 19
  -56 33 -108 170 -626 48 -1299 -329 -1825 -32 -44 -59 -85 -62 -91 -4 -10 102
  -104 118 -104 12 0 123 159 191 273 214 360 320 751 321 1177 0 230 -33 462
  -93 659 -11 36 -18 66 -17 68 3 2 90 -49 204 -118 l32 -20 42 71 c23 39 40 72
  38 74 -5 5 -433 262 -459 276 -16 8 -22 6 -34 -12z"/>
  </g>
    </svg>
  )

  const [yourName, setYourName] = useState('');
  const [yourNameError, setYourNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
  
      if (!yourName) {
        setYourNameError('Your Name is required');
        valid = false;
      } else {
        setYourNameError('');
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Valid email address is required');
          valid = false;
      } else {
        setEmailError('');
      }

      if (!subject) {
          setSubjectError('Subject is required');
          valid = false;
        } else {
          setSubjectError('');
        }

        if (!message) {
          setMessageError('Message is required');
          valid = false;
        } else {
          setMessageError('');
        }
    
      if(!valid) {
        return;
      }
  
      console.log('Form submitted with:', { yourName });  //......... ???
    };


  return (

    <div>
        <div className='pt-40 pb-36 text-white'
        style={{
            backgroundImage: `url(${contactUs})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>

       <div className='hidden md:block'>
         <h1 className="mt-1 text-[40px] font-bold text-white text-center">
            Contact Us
         </h1>
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
            <Link to='//' className='flex items-center text-white text-sm font-semibold'>
                Contact Us 
            </Link>
          </Breadcrumbs>
        </div>
       </div>


       <div className='flex gap-64 justify-center max-w-full pt-[100px]'>

          <div className='flex flex-col p-2 max-w-xl'> 
                <h2 className='text-[18px] font-[600] text-[#0773B3] leading-[26px] mb-1'>
                  Let's Talk About
                </h2>
                <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] mb-6'>
                  Your QSR Revenue
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                  Increased profits
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                  Reducing staffing costs
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                  Increse employee morale
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-6'>
                  Reduce turnover
                </h1>
                <h2 className='text-[18px] font-[600] text-[#0773B3] leading-[26px] mb-4'>
                  We look forward to working with you!
                </h2>

                <div className='mt-1 flex items-center'>
                  <Link to='/' className='flex items-center py-4 px-3 border-none rounded-md text-white text-sm font-semibold
                    bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                      NO RISK FREE TRIAL
                  </Link>
                </div>
                
          </div> 

          <div className='w-[502px] h-[215px]'>
            
              <img src={contactUsImg} className='rounded-lg' alt="contact-Us"/>
                 
          </div>

       </div>

       <div className='flex gap-56 justify-center max-w-full pt-[100px]'>
        
          <div className='flex flex-col p-2 max-w-xl'> 
            <h1 className='text-[40px] font-[700] text-[#222d35] ml-44 leading-[40px] text-center pb-14'>Contact Us</h1>

            
          {/* <div className='grid grid-cols-1 md:grid-cols-4 mx-auto md:max-w-6xl max-w-full'> */}
          
            {ciData.map((data) =>(
              <div key={data.id} className='flex'>
                
                <dt className='flex items-start gap-x-3 py-5 leading-6'>
                  <span className='bg-[#282d47] rounded-full text-center p-3' >
                    {data.icon}
                  </span>
                  <div className='flex flex-col '>
                    <h1 className='font-bold text-[26px]'>{data.title} </h1>
                    <div className='text-[15px] text-[#282727] font-normal leading-[26px] my-2 '>
                      {data.id === 1 && (
                        <h2>
                          <a href={`tel:${data.text}`} className='text-[#282d47] hover:text-[#0773B3] transition duration-500 text-[15px] font-[400] leading-[26px]'>
                            {data.text}
                          </a>
                        </h2>
                       
                      )}

                      {data.id === 2 && (
                         <h2>
                         <a className='text-[#282d47] hover:text-[#0773B3] transition duration-500 text-[15px] font-[400] leading-[26px]' href={`mailto:${data.text}`}>
                           {data.text}
                         </a>
                       </h2>
                      )}

                      {data.id === 3 && (
                       <>
                        <p>{data.text} </p>
                        <p>{data.text2} </p>
                        <p>{data.text3} </p>
                       </>
                      )}


                    </div>
                  </div>
                </dt>
               
              </div>
            ))}

              <h1 className='font-bold text-center text-[#222d35] ml-44 text-[40px] leading-[40px]'> Help Desk </h1>
              <div className='flex'>

                <dt className='flex items-start gap-x-3 py-5 leading-6'>
                  <span className='bg-[#282d47] rounded-full text-center p-3' >
                    <IconC4 />
                  </span>
                 
                    <div className='text-[15px] text-[#282727] font-normal leading-[26px] '>
                      <p>Monday – Sunday</p>
                      <p>9am to 3am EST</p>

                      <div className='mt-1'>
                        <a className='text-[#282d47] hover:text-[#0773B3] transition duration-500 text-[15px] font-[400] leading-[26px]' href="tel:(830)-630-8300">
                          (830)-630-8300
                        </a>
                      </div>

                      <div>
                        <a className='text-[#282d47] hover:text-[#0773B3] transition duration-500 text-[15px] font-[400] leading-[26px]' href="mailto:support@kanekt365.com">
                          support@kanekt365.com
                        </a>
                      </div>

                    </div>
                 
                </dt>
               
              </div>

          {/* </div>             */}
        
          </div> 

          <div>
            <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] text-center pb-14'>Write to Us:</h1>
            <div className="w-[557px] h-[555px] border-2 border-gray-700/10 rounded-lg p-6">
              
              <form onSubmit={handleSubmit}>   

                  <div className="md:col-span-2 md:col-start-1">
                      <div>
                          <input
                          id="yourName"
                          name="yourName"
                          type="text"
                          value={yourName}
                          placeholder='Your Name'
                          onChange={(e) => setYourName(e.target.value)}
                          autoComplete="first-name"
                          // className="block w-full rounded-md py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm md:leading-10"
                          />
                      </div>
                      {yourNameError && (
                          <p className="mt-2 text-sm text-start text-red-600">
                          {yourNameError}
                          </p>
                      )}
                  </div>

                  <div className="md:col-span-2 mt-5">
                      <div>
                          <input
                          id="email"
                          name="email"
                          type="text"
                          value={email}
                          placeholder='Email*'
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                          />
                      </div>
                      {emailError && (
                          <p className="mt-2 text-sm text-start text-red-600">
                          {emailError}
                          </p>
                      )}
                  </div>

                  <div className="md:col-span-2 mt-5">
                      <div>
                          <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={subject}
                          placeholder='Subject'
                          onChange={(e) => setSubject(e.target.value)}
                          autoComplete="subject"
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                          />
                      </div>
                      {subjectError && (
                          <p className="mt-2 text-sm text-start text-red-600">
                          {subjectError}
                          </p>
                      )}
                  </div>

                  <div className="md:col-span-2 mt-5">
                      <div>
                          <input
                          id="message"
                          name="message"
                          type="text"
                          value={message}
                          placeholder='Message'
                          onChange={(e) => setMessage(e.target.value)}
                          autoComplete="message"
                          className="block w-full rounded-md border-0 pt-3 pb-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                      </div>
                      {messageError && (
                          <p className="mt-2 text-sm text-start text-red-600">
                          {messageError}
                          </p>
                      )}
                  </div>
                  
                  <div className='flex justify-center mt-5'>
                      <button type='submit' className='py-4 px-[205px] rounded-md text-white font-[700]
                      bg-[#282d47] hover:bg-[#0773B3] text-sm transition duration-500'>SUBMIT NOW</button>
                  </div>

              </form>     

            </div>
          </div>

       </div>

       <div className='flex justify-around bg-[#0773B3] items-center rounded-lg max-w-[1110px] mx-auto py-8 px-4 mt-10'>

          <div className='text-[27px] font-[700] text-[#fff] w-[430px] leading-relaxed'>
            <h2>Stay up to date with our news, ideas and updates</h2>
          </div>

          <div>
            <form onSubmit={handleSubmitNews} className="relative flex items-center">
              <input
                type="emailNews"
                placeholder="Enter your email"
                value={emailNews}
                onChange={(e) => setEmailNews(e.target.value)}
                className="w-[550px] p-4 ml-2 md:ml-0 rounded border border-gray-300 text-gray-100 flex-1"
                
              />
            <button
              type="submit"
              className="absolute w-44 right-0 top-0 bottom-0 text-white p-3 rounded rounded-tl-none rounded-bl-none flex items-center justify-center bg-[#000]">
              <h2>SUBSCRIBE</h2>
            </button>
            </form>
            {messageNews && (
              <p className={`mt-1 ml-2 md:ml-0 ${isErrorNews ? 'text-red-500' : 'text-green-500'}`}>
                {messageNews}
              </p>
            )}
          </div>
          
       </div>

       {/* ---------------- */}

        <div className='pt-16 pb-12'>
          <h2 className='text-[44.46px] font-[700] text-[#222d35] leading-[46px] text-center pb-14'>OUR LOCATIONS</h2>
          <div className='grid grid-cols-3 max-w-[1110px] mx-auto gap-y-8'>
            
            <div>
              <h1 className='text-[#0773B3] text-[26px] font-[700] leading-[46px]'>UNITED STATES</h1>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px]'>Headquarters</h2>
              <p className='text-left w-72 text-[#666] text-[18px] font-[500] leading-[26px]'>585 Union Avenue Suite 7 A&B Laconia, New Hampshire, 03246</p>
            </div>

            <div>
              <h1 className='text-[#0773B3] text-[26px] font-[700] leading-[46px]'>PAKISTAN</h1>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px]'>Lahore Office</h2>
              <p className='text-left w-72 text-[#666] text-[18px] font-[500] leading-[26px]'>Bahria Complex Tower, Plot # 103, Upper Mall, Lahore, Punjab</p>
            </div>

            <div>
              <h1 className='text-[#0773B3] text-[26px] font-[700] leading-[46px]'>UAE</h1>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px]'>Ras Al Khaimah Office</h2>
              <p className='text-left w-80 text-[#666] text-[18px] font-[500] leading-[26px]'>FDAM0011 Service Block Al Jazirah, Al Hamra Industrial Zone-FZ, Ras Al Khaimah</p>
            </div>

            <div>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px] my-auto'>Delaware Office</h2>
              <p className='text-left w-64 text-[#666] text-[18px] font-[500] leading-[26px]'>16192 Coastal Highway, Lewes, Delaware, 19958</p>
            </div>

            <div>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px]'>Islamabad Office</h2>
              <p className='text-left w-[350px] text-[#666] text-[18px] font-[500] leading-[26px]'>Office #101 and 102 first floor, Evacuee trust complex, Sir Agha Khan Road, plot 04, F5/1, Islamabad, Punjab</p>
            </div>

            <div>
              <h1 className='text-[#0773B3] text-[26px] font-[700] leading-[46px] pt-5'>PHILIPPINES</h1>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px]'>Davao City Office</h2>
              <p className='text-left w-[338px] text-[#666] text-[18px] font-[500] leading-[26px]'>Off# 618 & 619, Regus Felcris Centrale Center, 6th Floor Felcris Centrale, 40-D Quimpo Blvd, Talomo, 8000, Davao City</p>
            </div>

            <div>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px] mt-[-90px]'>Fremont Office</h2>
              <p className='text-left w-64 text-[#666] text-[18px] font-[500] leading-[26px]'>42910 Corte Caracas, Fremont, California, 94539</p>
            </div>

            
            <div>
              <h2 className='text-[#000] text-[18px] font-[700] leading-[46px] mt-[-90px]'>Karachi Office</h2>
              <p className='text-left w-76 text-[#666] text-[18px] font-[500] leading-[26px]'>Floor 8, 9, 10 & 11, Bahria Town Tower Tariq Road, Shahrah-e-Quaideen Karachi, Sindh</p>
            </div>

            <div>
              <h1 className='text-[#0773B3] text-[26px] font-[700] leading-[46px]'>COSTA RICA</h1>
              <p className='text-left w-80 text-[#666] text-[18px] font-[500] leading-[26px]'>We Work, 5th Floor, Escazú, San José, SJ 10203</p>
            </div>

          </div>
        </div>
       
    </div>

  )
}

export default ContactUs