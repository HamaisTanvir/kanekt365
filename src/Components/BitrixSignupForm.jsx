import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import blogsBg from '../assets/blogsBg.jpg'


const BitrixSignupForm = () => {
 
  const steps = [
    'BUSINESS AND STORE DETAILS',
    'SIGNED UP',
  ];

  const [legalBusinessDetails, setLegalBusinessDetails] = useState('');
  const [legalBusinessDetailsError, setLegalBusinessDetailsError] = useState('');
  const [OwnerName, setOwnerName] = useState('');
  const [ownerNameError, setOwnerNameError] = useState('');
  const [OwnerEmail, setOwnerEmail] = useState('');
  const [ownerEmailError, setOwnerEmailError] = useState('');
  const [OwnerPhone, setOwnerPhone] = useState('');
  const [ownerPhoneError, setOwnerPhoneError] = useState('');
  const [RoutingNumber, setRoutingNumber] = useState(''); 
  const [routingNumberError, setRoutingNumberError] = useState('');
  const [AccountNumber, setAccountNumber] = useState(''); 
  const [accountNumberError, setAccountNumberError] = useState('');
  const [ManagerEmail, setManagerEmail] = useState(''); 
  const [managerEmailError, setManagerEmailError] = useState('');
  const [PhoneProvider, setPhoneProvider] = useState(''); 
  const [phoneProviderError, setPhoneProviderError] = useState(''); 
  // const [message, setMessage] = useState('');
  // const [Error, setError] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!legalBusinessDetails) {
      setLegalBusinessDetailsError('Legal Business Details is required');
      valid = false;
    } else {
      setLegalBusinessDetailsError('');
    }

    if (!OwnerName) {
      setOwnerEmailError('Owner Name Details is required');
      valid = false;
    } else {
      setOwnerNameError('');
    }
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(OwnerEmail)) {
        setOwnerEmailError('Please provide a valid email address');
        valid = false;
    } else {
      setOwnerEmailError('');
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(OwnerPhone)) {
        setOwnerPhoneError('Please provide a valid phone number');
        valid = false;
    } else {
      setOwnerPhoneError('');
    }

    if(!RoutingNumber){
      setRoutingNumberError('Routing Number is required');
      valid = false;
    } else{
      setRoutingNumberError('');
    }

    const accountNumberRegex = /^\d{13}$/;
    if (!accountNumberRegex.test(AccountNumber)) {
      setAccountNumberError('Account Number must be exactly 13 digits');
      valid = false;
    } else {
      setAccountNumberError('');
    }

    if (!emailRegex.test(ManagerEmail)) {
      setManagerEmailError('Please provide a valid email address');
      valid = false;
    } else {
      setManagerEmailError('');
    }

    if (!phoneRegex.test(PhoneProvider)) {
      setPhoneProviderError('Please provide a valid phone number');
      valid = false;
    } else {
      setPhoneProviderError('');
    }
  
    if(!valid) {
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted with:', { legalBusinessDetails, OwnerName, OwnerEmail, OwnerPhone });  //......... ???
  };

  return (

  <div>
       <div className='pt-40 pb-36 text-white'
        style={{
            backgroundImage: `url(${blogsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>

       <div className='hidden md:block'>
         <h1 className="mt-1 text-[40px] font-bold text-white text-center">
            Sign up
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
                SIGN UP
            </Link>
          </Breadcrumbs>
        </div>
       </div>

    <form onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center font-bold leading-7 text-gray-900 mt-10">Quick Service Restaurant</h1>
          <h2 className="text-lg text-center font-bold mt-12" style={{color: '#333333'}}>CLIENT ONBOARDING - STORE SIGN UP</h2>
          <div className="block max-w-14 h-1 bg-orange-500 mx-auto my-5" style={{ background: '#f6931e'}}></div>

        <Box className='mx-auto ' sx={{ width: '80%'}}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="container text-center mx-auto max-w-6xl rounded-md border-2 border-gray-900/10 pb-6">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 pl-4 pr-4 pt-5">

              <h1 className='text-md text-left font-bold' style={{color: '#666', marginBottom: '-10px'}}>Business Details</h1>
          <div className="sm:col-span-2 sm:col-start-1">
              <div>
                <input
                  id="legalBusinessDetails"
                  name="legalBusinessDetails"
                  type="text"
                  value={legalBusinessDetails}
                  placeholder='Legal Business Details'
                  onChange={(e) => setLegalBusinessDetails(e.target.value)}
                  autoComplete="legal-business-details"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {legalBusinessDetailsError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {legalBusinessDetailsError}
                </p>
              )}
            </div>
          

            <div className="sm:col-span-2">
              <div>
                <input
                  id="AssociatedBrand"
                  name="AssociatedBrand"
                  type="text"
                  placeholder='Associated Brand'
                  autoComplete="associated-brand"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="NoofStores"
                  name="NoofStores"
                  type="text"
                  placeholder='No of Stores in Brand'
                  autoComplete="no-of-stores"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <h1 className='text-md text-left font-bold' style={{color: '#666', marginBottom: '-10px'}}>Owner Information</h1>
          <div className="sm:col-span-2 sm:col-start-1">
              <div>
                <input
                  id="OwnerName"
                  name="OwnerName"
                  type="text"
                  value={OwnerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Owner's Name"
                  autoComplete="owner-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {ownerNameError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {ownerNameError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="OwnerPhone"
                  name="OwnerPhone"
                  type="text"
                  placeholder="Owner's Phone"
                  value={OwnerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  autoComplete="owner-phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {ownerPhoneError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {ownerPhoneError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="OwnerEmail"
                  name="OwnerEmail"
                  type="email"
                  placeholder="Owner's Email"
                  value={OwnerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  autoComplete="owner-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {ownerEmailError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {ownerEmailError}
                </p>
              )}
            </div>

            <div className="sm:col-span-6">
              <div>
                <input
                  id="StreetAddress"
                  name="StreetAddress"
                  type="text"
                  placeholder='Street Address'
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="City"
                  name="City"
                  type="text"
                  placeholder='City'
                  autoComplete="city"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="State"
                  name="State"
                  type="text"
                  placeholder='State'
                  autoComplete="state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="Zip"
                  name="Zip"
                  type="text"
                  placeholder='Zip'
                  autoComplete="zip"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <h1 className='text-md text-left font-bold' style={{color: '#666', marginBottom: '-10px'}}>Bank Information</h1>
          <div className="sm:col-span-3 sm:col-start-1">
              <div>
                <input
                  id="BusinessNameOnBank"
                  name="BusinessNameOnBank"
                  type="text"
                  placeholder="Business Name on Bank Account"
                  autoComplete="business-name-on-bank"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <input
                  id="BankName"
                  name="BankName"
                  type="text"
                  placeholder="Bank Name"
                  autoComplete="bank-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="RoutingNumber"
                  name="RoutingNumber"
                  type="text"
                  value={RoutingNumber}
                  onChange={(e) => setRoutingNumber(e.target.value)}
                  placeholder="Routing Number"
                  autoComplete="routing-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {routingNumberError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {routingNumberError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="AccountNumber"
                  name="AccountNumber"
                  type="text"
                  value={AccountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder='Account Number'
                  autoComplete="account-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {accountNumberError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {accountNumberError}
                </p>
              )}
            </div>  

            <div className="sm:col-span-2">
              <div>
                <input
                  id="AccountingEmail"
                  name="AccountingEmail"
                  type="email"
                  placeholder='Accounting Email'
                  autoComplete="accounting-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>  

            <h1 className='text-md text-left font-bold' style={{color: '#666', marginBottom: '-10px'}}>Store Information</h1>
          <div className="sm:col-span-3 sm:col-start-1">
              <div>
                <input
                  id="StoresMain"
                  name="StoresMain"
                  type="text"
                  placeholder="Store Main #"
                  autoComplete="stores-main"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <input
                  id="Store#Identifier"
                  name="Store#Identifier"
                  type="text"
                  placeholder="Store # or Identifier"
                  autoComplete="store-#-identifier"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <input
                  id="HoursSunThurs"
                  name="HoursSunThurs"
                  type="text"
                  placeholder="Hours Sun - Thurs"
                  autoComplete="hours-sun-thurs"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <input
                  id="HoursFriSat"
                  name="HoursFriSat"
                  type="text"
                  placeholder='Hours Fri & Sat'
                  autoComplete="hours-fri-sat"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>  

            <div className="sm:col-span-6">
              <div>
                <input
                  id="StoreStreetAddress"
                  name="StoreStreetAddress"
                  type="text"
                  placeholder='Store Street Address'
                  autoComplete="store-street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>  

            <div className="sm:col-span-2">
              <div>
                <input
                  id="StoreCity"
                  name="StoreCity"
                  type="text"
                  placeholder="Store City"
                  autoComplete="store-city"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="StoreState"
                  name="StoreState"
                  type="text"
                  placeholder="Store State"
                  autoComplete="store-state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="StoreZip"
                  name="StoreZip"
                  type="text"
                  placeholder='Store Zip'
                  autoComplete="store-zip"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

            <div className="sm:col-span-2">
              <div>
                <input
                  id="ManagerName"
                  name="ManagerName"
                  type="text"
                  placeholder="Manager Name"
                  autoComplete="manager-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="ManagerEmail"
                  name="ManagerEmail"
                  type="email"
                  value={ManagerEmail}
                  onChange={(e) => setManagerEmail(e.target.value)}
                  placeholder="Manager Email"
                  autoComplete="manager-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {managerEmailError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {managerEmailError}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="PhoneProvider"
                  name="PhoneProvider"
                  type="text"
                  value={PhoneProvider}
                  onChange={(e) => setPhoneProvider(e.target.value)}
                  placeholder='Phone Provider'
                  autoComplete="phone-provider"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {phoneProviderError && (
                <p className="mt-2 text-sm text-start text-red-600">
                  {phoneProviderError}
                </p>
              )}
            </div> 

        </div>

          <div className='flex justify-end mr-4 mt-5'>
            <button type='submit' style={{backgroundColor:'black', border: 'solid 2px #0773B3'}} 
            className='py-4 px-24 rounded-md text-white'>Sign Up</button>
           </div>
      </div>
    </form>
  </div>
  )
}

export default BitrixSignupForm
    
