import React from 'react'
import blogsBg from '../assets/blogsBg.jpg'
import { Breadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EBooksInner = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const kkt_pageSource = searchParams.get('kkt_pagesource');

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [company, setCompany] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobTitleError, setJobTitleError] = useState('');
    const [numberOfLocations, setNumberOfLocations] = useState('');
    const [pointOfSale, setPointOfSale] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
    
        if (!firstName) {
          setFirstNameError('First Name is required');
          valid = false;
        } else {
          setFirstNameError('');
        }
    
        if (!lastName) {
          setLastNameError('Last Name is required');
          valid = false;
        } else {
          setLastNameError('');
        }
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setEmailError('Valid email address is required');
            valid = false;
        } else {
          setEmailError('');
        }

        if (!company) {
            setCompanyError('Company Name is required');
            valid = false;
          } else {
            setCompanyError('');
          }

          if (!jobTitle) {
            setJobTitleError('Job Title is required');
            valid = false;
          } else {
            setJobTitleError('');
          }
      
        if(!valid) {
          return;
        }
    
        console.log('Form submitted with:', { firstName });  //......... ???
      };

    //   const [numberOfLocations, setNumberOfLocations] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };


  return (
    <>
    {kkt_pageSource === 'e-books' && (
    <div>
        <div className='pt-36 pb-16 text-white'
        style={{
            backgroundImage: `url(${blogsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>

       <div>
         <h1 className="mt-1 text-[30px] md:text-[40px] font-bold text-white text-center">
            Benefits Of An Exclusive Quick Service Restaurant Call center
         </h1>
       </div>

        {/* <div className='md:hidden'>
          <h1 className="text-3xl mt-4 font-semibold text-white text-center pt-5 p-2">
            Watch the Kanekt 365 overview video to learn about everything our call centers have to offer and see your ROI!
          </h1>
        </div> */}

        <div className='mt-5 flex items-center justify-center'>
          <Breadcrumbs>
            <Link to='/' className='flex items-center text-white text-sm font-semibold'>
                HOME <span className='px-4 text-[#0773b3] text-[24px]'>&#x2022;</span>
            </Link>
          </Breadcrumbs>
          <Breadcrumbs>
            <Link to='//' className='flex items-center text-white text-sm font-semibold'>
                RESOURCES <span className='px-4 text-[#0773b3] text-[24px]'>&#x2022;</span>
            </Link>
          </Breadcrumbs>
          <Breadcrumbs>
            <h2 to='/' className='text-white text-[15px] md:text-sm font-semibold whitespace-normal block'>
                BENEFITS OF AN EXCLUSIVE QUICK SERVICE RSTAURANT CALL CENTER
            </h2> 
          </Breadcrumbs>
        </div>
       </div>


       <div className='flex gap-8 justify-center max-w-full pt-[100px]'>
          <div className='flex flex-col p-2 max-w-xl'> 
                <h1 className='text-[23px] font-[400] text-[#222d35] leading-[31px] mb-7'>Benefits Of An Exclusive Quick Service Restaurant Call center</h1>
                <p className='text-[15px] font-[400] text-[#666] leading-[26px]'>Our E-book titled Benefits of an Exclusive QSR Call Center will teach you everything from how a call center works, the technology used, best practices, and the benefits to QSRs. This E-book is a step-by-step guide that will show why most QSRs have already outsourced to call centers to improve their customers’ experiences and the restaurant’s efficiency.</p>
          </div> 

          <div className="w-[540px] h-[820px] bg-[#f5f8fa] rounded-lg p-10">
                <h2 className='text-[24px] font-[700] text-[#263238] leading-[28px] text-center pb-14'>Download the Guide</h2>
                <p className='text-[10px] text-[#777] font-[400] leading-[10px] pb-5'>Fields marked with an * are required.</p>
            
             <form onSubmit={handleSubmit}>       
                <div className="md:col-span-2 md:col-start-1">
                    <div>
                        <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={firstName}
                        placeholder='First Name*'
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="first-name"
                        className="block w-full rounded-md border-none py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
                        />
                    </div>
                    {firstNameError && (
                        <p className="mt-2 text-sm text-start text-red-600">
                        {firstNameError}
                        </p>
                    )}
                </div>

                <div className="md:col-span-2 mt-5">
                    <div>
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        placeholder='Last Name*'
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="last-name"
                        className="block w-full rounded-md border-none py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
                        />
                    </div>
                    {lastNameError && (
                        <p className="mt-2 text-sm text-start text-red-600">
                        {lastNameError}
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
                        className="block w-full rounded-md border-none py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
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
                        id="company"
                        name="company"
                        type="text"
                        value={company}
                        placeholder='Company*'
                        onChange={(e) => setCompany(e.target.value)}
                        autoComplete="company"
                        className="block w-full rounded-md border-none py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
                        />
                    </div>
                    {companyError && (
                        <p className="mt-2 text-sm text-start text-red-600">
                        {companyError}
                        </p>
                    )}
                </div>

                <div className="md:col-span-2 mt-5">
                    <div>
                        <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        value={jobTitle}
                        placeholder='Job Title*'
                        onChange={(e) => setJobTitle(e.target.value)}
                        autoComplete="jobTitle"
                        className="block w-full rounded-md border-none py-3 text-[15px] font-[400] text-[#263238] placeholder:text-[#666666] focus:ring-1 focus:ring-indigo-800"
                        />
                    </div>
                    {jobTitleError && (
                        <p className="mt-2 text-sm text-start text-red-600">
                        {jobTitleError}
                        </p>
                    )}
                </div>

                <Box sx={{ minWidth: 120, background: '#fff', mt: 2, border: 0, }}>
                    <FormControl fullWidth>
                        <InputLabel id="number-of-locations">Number of Locations *</InputLabel>
                        <Select
                        labelId="number-of-locations"
                        id="number-of-locations"
                        value={numberOfLocations}
                        label="numberOfLocations"
                        onChange={(e)=>setNumberOfLocations(e.target.value)}
                        >
                        <MenuItem value={1-4}>1-4</MenuItem>
                        <MenuItem value={5-14}>5-14</MenuItem>
                        <MenuItem value={15-49}>15-49</MenuItem>
                        <MenuItem value={50-199}>50-199</MenuItem>
                        <MenuItem value={200}>200+</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120, background: '#fff', mt: 2, border: 0, }}>
                    <FormControl fullWidth>
                        <InputLabel id="point-of-sale">Point-of-Sale System *</InputLabel>
                        <Select
                        labelId="point-of-sale"
                        id="point-of-sale"
                        value={pointOfSale}
                        label="pointOfSale"
                        onChange={(e)=>setPointOfSale(e.target.value)}
                        >   
                        <MenuItem value={'Aloha'}>Aloha</MenuItem>
                        <MenuItem value={'Brink'}>Brink</MenuItem>
                        <MenuItem value={'Clover'}>Clover</MenuItem>
                        <MenuItem value={'Micros'}>Micros</MenuItem>
                        <MenuItem value={'NCR'}>NCR</MenuItem>
                        <MenuItem value={'Oracle'}>Oracle</MenuItem>
                        <MenuItem value={'Revel'}>Revel</MenuItem>
                        <MenuItem value={'SpotOn'}>SpotOn</MenuItem>
                        <MenuItem value={'Square'}>Square</MenuItem>
                        <MenuItem value={'Toast'}>Toast</MenuItem>
                        <MenuItem value={'Custom'}>Custom</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
                <div className='flex justify-center mt-5'>
                    <button type='submit' className='py-4 px-[189px] rounded-md text-white font-[700]
                     bg-[#0773B3] text-sm'>GET IT NOW</button>
                </div>
             </form>     
          </div>

       </div>
    </div>

    )}
        
    </>
  )
}

export default EBooksInner