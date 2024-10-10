import React from 'react'
import pricingBg from '../assets/pricingBg.jpg'
import pricingImg from '../assets/pricingImg.jpg'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Pricing = () => {

function createData(name, numberofstores, costpercall) {
    return { name, numberofstores, costpercall };
    }
    
    const rows = [
    createData('15-24*', '$1.07'),
    createData('25-29', '$ 0.99'),
    createData('60-99', '$ 0.95'),
    createData('100+', '$ 0.90'),
    ];
  
    const [SAT, setSAT] = useState('$24')
    const [AWR, setAWR] = useState('$18,000')
    const [onlineOrders, setOnlineOrders] = useState('')
    const [walkinOrders, setWalkinOrders] = useState('')
    const [hoursPerWeek, setHoursPerWeek] = useState('')
    const [entireChain, setEntireChain] = useState('')
    const [storesYouOwn, setStoresYouOwn] = useState('')

    const handleSAT = (e) => {
        let inputValue = e.target.value;
        // Ensure `$` remains at the beginning
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setSAT(inputValue);
      };

      const handleAWR = (e) => {
        let inputValue = e.target.value;
        // Ensure `$` remains at the beginning
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setAWR(inputValue);
      };

  const [emailNews, setEmailNews] = useState('');
  const [messageNews, setMessageNews] = useState('');
  const [isErrorNews, setIsErrorNews] = useState(false);

  const handleSubmitNews = (e) => {
    e.preventDefault();
    if (!emailNews) {
      setMessageNews('Please enter your email');
      setIsErrorNews(true);
    } else {
      setMessageNews('Successfully subscribed to the newsletter!');
      setIsErrorNews(false);
      setEmailNews('');
    }
  };
  

  const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;

        if (!onlineOrders) {
            setOnlineOrders('This is required');
            valid = false;
        } else {
            setOnlineOrders(e.target.value);
        }

        if (!walkinOrders) {
            setWalkinOrders('This is required');
            valid = false;
          } else {
            setWalkinOrders(e.target.value);
          }

        if (!hoursPerWeek) {
            setHoursPerWeek('This is required');
            valid = false;
        } else {
            setHoursPerWeek(e.target.value);
        }

        if (!entireChain) {
            setEntireChain('This is required');
            valid = false;
        } else {
            setEntireChain(e.target.value);
        }

        if (!storesYouOwn) {
            setStoresYouOwn('This is required');
            valid = false;
        } else {
            setStoresYouOwn(e.target.value);
        }
    
      if(!valid) {
        return;
      }
  
      console.log('Form submitted with:', { SAT });  //......... ???
    };

  return (

    <div>
        <div className='pt-40 pb-36 text-white'
        style={{
            backgroundImage: `url(${pricingBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>

       <div className='hidden md:block'>
         <h1 className="mt-1 text-[40px] font-bold text-white text-center">
            Our Pricing
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
                OUR PRICING 
            </Link>
          </Breadcrumbs>
        </div>
       </div>
            {/* <-------------------------------------> */}

       <div className='flex gap-[350px] justify-center max-w-full pt-[100px]'>
          <div className='flex flex-col p-2 max-w-xl'> 
                <h2 className='text-[15px] font-[600] text-[#0773B3] leading-[26px] mb-1'>
                    OUR SERVICE INCLUDES
                </h2>
                <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] mb-6'>
                    ZERO RISK!
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    No Long Term Contract 
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    All QSR Calls Recorded
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Interactive Voice Response (IVR)
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Report Portal
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Recruiting/Hiring/Training
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Campaign Management
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Quality Assurance/Mystery Shoppers
                </h1>
                <h1 className='text-[20px] font-[700] text-[#282d47] leading-[30px] mb-4'>
                    Call Center Hotline/Help Desk
                </h1>
             

                <div className='mt-1 flex items-center'>
                  <Link to='/' className='flex items-center py-[18px] px-[40px] border-none rounded-md text-white text-sm font-semibold
                    bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                      FREE TRIAL - NO RISK
                  </Link>
                </div>
                
          </div> 

          <div className='w-[502px] h-[215px] pt-16'>
              <img src={pricingImg} className='rounded-lg' alt="contact-Us"/> 
          </div>
       </div>
            {/* <-------------------------------------> */}

       <div className='flex gap-6 max-w-full mt-10 px-28 py-12 bg-[#F6F6F6]'>
        
          <div className='flex flex-col p-2 max-w-[545px]'> 
            <TableContainer>
            <Table sx={{ minWidth: 520, border: 1, borderColor: '#dedede'}} aria-label="simple table">
                <TableHead sx={{border: 2, borderColor: 'black'}}>
                <TableRow >
                    <TableCell sx={{background: '#0773b3', color: '#fff', fontWeight: 'bold', border: 1}}>Number of Stores</TableCell>
                    <TableCell sx={{background: '#0773b3', color: '#fff', fontWeight: 'bold'}} align="left">Cost per Call</TableCell>
                    <TableCell sx={{background: '#0773b3'}}></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                
                    >
                    <TableCell component="th" scope="row" sx={{fontSize: '18px', fontWeight: '700', color: '#272727'}}>
                        {row.name}
                    </TableCell>
                    <TableCell sx={{color: '#666', fontSize: '18px', borderLeft: 1, borderColor: '#dedede'}} align="left">{row.numberofstores}</TableCell>
                    <TableCell align="left">{row.costpercall}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

            <h2 className='text-[14px] font-[600] leading-[24px] text-[#54595F] mt-4 italic'>
            ALL PRICING SUBJECT TO CHANGE</h2>
          </div> 

          <div className='space-y-3'>
                <h1 className='text-[40px] font-[700] leading-[46px] text-left text-[#000] pb-6'>25+ LOCATIONS PER BRAND REQUIRED</h1>
                <h1 className='text-[20px] font-[700] leading-[30px] text-[#282d47]'>
                    * Kanekt 365 only works with groups under 25 if they are associated with a larger group of franchisees.
                </h1>
                <h1 className='text-[20px] font-[700] leading-[30px] text-[#282d47]'>
                    ** The calculations above are averages based on groups of 100+ locations
                </h1>
                <h1 className='text-[20px] font-[700] leading-[30px] text-[#282d47]'>
                    *** $7 per store per week for telephony charges
                </h1>

            <div className='pt-6 flex'>
                <Link to='/' className='flex items-center py-[18px] px-[40px] border-none rounded-md text-white text-sm font-semibold
                bg-[#0773B3] hover:bg-[#282D47] transition duration-500'>
                    FREE TRIAL - NO RISK
                </Link>
            </div>

          </div>

       </div>
            {/* <-------------------------------------> */}
    
        <div className='pt-[100px]'>

            <div>
                <h2 className='text-[15px] font-[600] text-[#0773B3] text-center leading-[26px] mb-1'>
                    SEE THE PROFIT AN AVERAGE STORE CAN MAKE THEN ENTER YOUR OWN
                </h2>
                <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] text-center pb-14'>
                    OUR ROI PRICING CALCULATOR
                </h1>

                <form onSubmit={handleSubmit}>   
                    <div className="max-w-6xl gap-x-6 gap-y-4  grid grid-cols-1 md:grid-cols-8 mx-auto p-6">

                            <div className="md:col-span-2 md:col-start-1">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Avg. Weekly Revenue</h2>
                                <div>
                                    <input
                                    id="awr"
                                    name="awr"
                                    type="text"
                                    value={AWR}
                                    placeholder=''
                                    onChange={handleAWR}
                                    autoComplete="awr"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Stores Average Ticket</h2>
                                <div>
                                    <input
                                    id="sat"
                                    name="sat"
                                    type="text"
                                    value={SAT}
                                    placeholder=''
                                    onChange= {handleSAT}
                                    autoComplete="email"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>% Online Orders</h2>
                                <div>
                                    <input
                                    id="onlineorders"
                                    name="onlineorders"
                                    type="text"
                                    value={onlineOrders}
                                    placeholder='40'
                                    onChange={(e) => setOnlineOrders(e.target.value)}
                                    autoComplete="online-orders"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>% Walkin Orders</h2>
                                <div>
                                    <input
                                    id="walkinorders"
                                    name="walkinorders"
                                    type="text"
                                    value={walkinOrders}
                                    placeholder='3'
                                    onChange={(e) => setWalkinOrders(e.target.value)}
                                    autoComplete="walkin-orders"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>
                    </div>

                    <div className="max-w-5xl gap-x-8 gap-y-4 grid grid-cols-1 md:grid-cols-6 mx-auto p-6">

                            <div className="md:col-span-2 md:col-start-1">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Hours Open Per Week</h2>
                                <div>
                                    <input
                                    id="hoursperweek"
                                    name="hoursperweek"
                                    type="text"
                                    value={hoursPerWeek}
                                    placeholder='86'
                                    onChange={(e) => setHoursPerWeek(e.target.value)}
                                    autoComplete="hour-per-week"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Number Of Stores In Entire Chain</h2>
                                <div>
                                    <input
                                    id="entirechain"
                                    name="entirechain"
                                    type="text"
                                    value={entireChain}
                                    placeholder='500'
                                    onChange={(e) => setEntireChain(e.target.value)}
                                    autoComplete="entire-chain"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                            <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Number of Stores You Own</h2>
                                <div>
                                    <input
                                    id="storesuown"
                                    name="storesuown"
                                    type="text"
                                    value={storesYouOwn}
                                    placeholder='2'
                                    onChange={(e) => setStoresYouOwn(e.target.value)}
                                    autoComplete="stores-you-own"
                                    className="w-[255px] rounded-md p-[5px] border-[#afaeae] placeholder:text-[#545454] focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:text-[20px]"
                                    />
                                </div>
                            </div>
                            

                    </div>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className='py-[12px] px-[30px] rounded-md text-white font-bold
                        bg-[#f8931f] shadow-xl shadow-slate-400 text-[18px] transition duration-500'>CALCULATE</button>
                    </div>
                </form>     

            </div>

        </div>
          {/* <-------------------------------------> */}
        {/* <div className='flex gap-56 justify-center max-w-full pt-[100px]'>
        
            <div className='flex flex-col p-2 max-w-xl'> 
                <h1 className='text-[40px] font-[700] text-[#222d35] ml-44 leading-[40px] text-center pb-14'>Contact Us</h1>

        
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

        </div> */}
      {/* <-------------------------------------> */}

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
            {/* <-------------------------------------> */}
       
    </div>

  )
}

export default Pricing