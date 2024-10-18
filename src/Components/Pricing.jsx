import React from 'react'
import pricingBg from '../assets/pricingBg.jpg'
import pricingImg from '../assets/pricingImg.jpg'
import pricingLowImg from '../assets/pricingLowImg.jpg'
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

//  1 -------- >
function createData(name, numberofstores, costpercall) {
    return { name, numberofstores, costpercall };
    }
    
    const rows = [
    createData('15-24*', '$1.07'),
    createData('25-29', '$ 0.99'),
    createData('60-99', '$ 0.95'),
    createData('100+', '$ 0.90'),
    ];

//  2 -------- >
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
  
//  1.1 -------- >
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

//  3 -------- >
    const [CCR, setCCR] = useState('$  0.00')
    const [KR, setKR] = useState('$  1.02')
    const [SM, setSM] = useState('2000')
    const [CPW, setCPW] = useState('135')
    const [CC, setCC] = useState('72.72')
    const [CK, setCK] = useState('82')
    const [ATC, setATC] = useState('$  27.95')
    const [ATK, setATK] = useState('$  29.00')

    const handleCCR = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setCCR(inputValue);
      };

      const handleKR = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setKR(inputValue);
      };

      const handleSM = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('')) {
          inputValue = `${inputValue.replace('')}`;
        }
        setSM(inputValue);
      };

      const handleCPW = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('')) {
          inputValue = `${inputValue.replace('')}`;
        }
        setCPW(inputValue);
      };

      const handleCC = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('')) {
          inputValue = `${inputValue.replace('')}`;
        }
        setCC(inputValue);
      };

      const handleCK = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('')) {
          inputValue = `${inputValue.replace('')}`;
        }
        setCK(inputValue);
      };

      const handleATC = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setATC(inputValue);
      };

      const handleATK = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith('$')) {
          inputValue = `$${inputValue.replace('$', '')}`;
        }
        setATK(inputValue);
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
             

                <div className='mt-4 flex items-center'>
                  <Link to='/' className='py-[18px] px-[40px] border-none rounded-md text-white text-sm font-semibold
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
                <Link to='/' className='py-[18px] px-[40px] border-none rounded-md text-white text-sm font-semibold
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
                        bg-[#f8931f] shadow-lg shadow-slate-400 text-[18px] transition duration-500'>CALCULATE</button>
                    </div>
                </form>     

            </div>

        </div>
          {/* <-------------------------------------> */}

        <div className='pt-[100px]'>
        
            <div>
                <h2 className='text-[15px] font-[600] text-[#0773B3] text-center leading-[26px] mb-1'>
                    ENTER YOUR OWN AND SEE THE CONVERSIONS
                </h2>
                <h1 className='text-[40px] font-[700] text-[#222d35] leading-[40px] text-center pb-12'>
                    CONVERSIONS CALCULATOR
                </h1>

                <div className='max-w-6xl space-y-4 gap-y-10 mx-auto pl-2 pr-4 pb-14'>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        Choosing a call center for your Quick Service Restaurant (QSR) is about finding the one that offers the most value and increases profitability. While rates are important, metrics like higher Average Ticket and Conversion Rates can significantly impact your revenue.
                    </p>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        Imagine you have 2,000 locations. Call Center #1 offers free services, while Call Center #2 offers more effective services for $1.02 per transaction. Call center #2 increases upsells, average ticket sizes, and conversion rates. The financial benefit can be as much as $34M, even with a per-transaction fee.
                    </p>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        For that reason, we encourage you to run your real numbers through our calculator to see the ROI. Be sure to focus on both cost and potential revenue growth. A call center with a higher fee may be a more financially responsible decision. Try it out.
                    </p>
                </div>

                <div className='max-w-6xl shadow-[-1px_1px_10px_5px_rgba(148,163,184,0.6)] mx-auto rounded-lg p-14'>
                    <form onSubmit={handleSubmit}> 
                            <div className="gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-4">
                            
                                <div className="md:col-span-2 md:col-start-1">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Call Center Rate:</h2>
                                    <div>
                                        <input
                                        id="ccrate"
                                        name="ccrate"
                                        type="text"
                                        value={CCR}
                                        placeholder=''
                                        onChange={handleCCR}
                                        autoComplete="cc-rate"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-sm md:leading-10"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Kanekt Rate:</h2>
                                    <div>
                                        <input
                                        id="krate"
                                        name="krate"
                                        type="text"
                                        value={KR}
                                        placeholder=''
                                        onChange={handleKR}
                                        autoComplete="kanekt-rate"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Number of Stores:</h2>
                                    <div>
                                        <input
                                        id="#stores"
                                        name="#stores"
                                        type="text"
                                        value={SM}
                                        placeholder=''
                                        onChange={handleSM}
                                        autoComplete="no-of-stores"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Average Calls per Week:</h2>
                                    <div>
                                        <input
                                        id="callsperweek"
                                        name="callsperweek"
                                        type="text"
                                        value={CPW}
                                        placeholder=''
                                        onChange={handleCPW}
                                        autoComplete="calls-per-week"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Conversion Calls Center:</h2>
                                    <div className= 'relative'>
                                        <input
                                        id="conversionscall"
                                        name="conversionscall"
                                        type="text"
                                        value={CC}
                                        placeholder=''
                                        onChange={handleCC}
                                        autoComplete="conversions-call"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-right ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                        <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">%</span>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Conversions Kanekt:</h2>
                                    <div className= 'relative'>
                                        <input
                                        id="conversionkanekt"
                                        name="conversionkanekt"
                                        type="text"
                                        value={CK}
                                        placeholder=''
                                        onChange={handleCK}
                                        autoComplete="conversion-kanekt"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                        <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">%</span>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Average Ticket for Call Center:</h2>
                                    <div>
                                        <input
                                        id="averageticket"
                                        name="averageticket"
                                        type="text"
                                        value={ATC}
                                        placeholder=''
                                        onChange={handleATC}
                                        autoComplete="average-ticket"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                <h2 className= 'text-[17px] font-[400] text-[#545454] mb-4'>Average Ticket for Kanekt:</h2>
                                    <div>
                                        <input
                                        id="ticketkanekt"
                                        name="ticketkanekt"
                                        type="text"
                                        value={ATK}
                                        placeholder=''
                                        onChange={handleATK}
                                        autoComplete="kanekt-ticket"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10"
                                        />
                                    </div>
                                </div>
                                    
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button type='submit' className='py-[14px] px-[62px] rounded-md text-white font-bold
                                bg-[#f8931f] shadow-lg shadow-slate-400 text-[18px] transition duration-500'>
                                    CALCULATE
                                </button>
                            </div>
                    </form>     
                </div> 
            </div>

        </div>
      {/* <-------------------------------------> */}

        <div className='pt-[60px]'>
                <div className='flex gap-12 justify-center'>
                    
                    <div className='flex flex-col p-2 max-w-[600px]'> 
                            <h2 className='text-[15px] font-[600] text-[#0773B3] leading-[26px] mb-1'>
                                Beyond the Numbers
                            </h2>
                            <h1 className='text-[40px] font-[700] uppercase text-[#222d35] leading-[40px] mb-6'>
                                The Added Value of Kanekt 365 QSR Call Center Services
                            </h1>
                            <p className='text-[15px] font-[400] leading-[26px] text-[#666] pt-6'>
                                Some key benefits can’t be measured int terms of money, yet they are crucial to business growth. Our clients often report notable improvements in areas that, while hard to quantify, have a significant impact on their operations and brand reputation.
                            </p>

                            
                    </div> 

                    <div className='w-[502px] h-[215px]'>
                        <img src={pricingLowImg} className='rounded-lg' alt="contact-Us"/> 
                    </div>
                </div>


                <div className='max-w-6xl space-y-4 mx-auto pl-2 pr-4 pt-10'>
                    <h2 className='text-[15px] font-[700] text-[#666] leading-[4px]'>
                        1. Superior Customer Experience
                    </h2>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        Our call center delivers professional and friendly customer interactions, helping to build brand loyalty and encourage repeat business. This personal touch can transform a one-time customer into a loyal patron.
                    </p>
                    <h2 className='text-[15px] font-[700] text-[#666] leading-[4px] pt-4'>
                        2. Increased Employee Productivity
                    </h2>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        By outsourcing calls, your staff can focus on their core tasks, leading to increased productivity. This allows your team to work more efficiently and concentrate on what they do best.
                    </p>
                    <h2 className='text-[15px] font-[700] text-[#666] leading-[4px] pt-4'>
                        3. Improved Employee Morale
                    </h2>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        When employees aren’t overloaded with calls, they can focus on their primary roles, resulting in a more positive work environment. This makes their day-to-day tasks more manageable and enjoyable, fostering a positive work environment from which everyone benefits.
                    </p>
                    <h2 className='text-[15px] font-[700] text-[#666] leading-[4px] pt-4'>
                        4. Reduced Employee Turnover
                    </h2>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666]'>
                        A call center can reduce turnover rates by improving employee morale and job satisfaction. This helps you retain experienced staff and lower the costs of hiring and training new employees.
                    </p>
                    <p className='text-[15px] font-[400] leading-[26px] text-[#666] pt-6'>
                        Although it’s hard to assign a specific monetary value to these benefits, their positive impact on your restaurant is undeniable.
                    </p>
                </div>

        </div>
     
            {/* <-------------------------------------> */}
       
    </div>

  )
}

export default Pricing