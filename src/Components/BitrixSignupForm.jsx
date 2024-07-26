import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';

const BitrixSignupForm = () => {
 
  const steps = [
    'BUSINESS AND STORE DETAILS',
    'SIGNED UP',
  ];

  const [localBusinessDetails, setLocalBusinessDetails] = useState('');
  const [OwnerEmail, setOwnerEmail] = useState('');
  const [OwnerPhone, setOwnerPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localBusinessDetails) {
      alert('Legal Business Details is required');
      return;
    }
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(OwnerEmail)) {
      alert('Please provide a valid email address');
      return;
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
if (!phoneRegex.test(OwnerPhone)) {
  alert('Please provide a valid phone number');
  return;
}
    // Handle form submission logic here
    console.log('Form submitted with:', { localBusinessDetails, OwnerEmail, OwnerPhone });
  };

  return (
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
                  required
                  placeholder='Legal Business Details'
                  onChange={(e) => setLocalBusinessDetails(e.target.value)}
                  autoComplete="legal-business-details"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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
                  required
                  placeholder="Owner's Name"
                  autoComplete="owner-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="OwnerPhone"
                  name="OwnerPhone"
                  type="text"
                  placeholder="Owner's Phone"
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  autoComplete="owner-phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="OwnerEmail"
                  name="OwnerEmail"
                  type="email"
                  placeholder="Owner's Email"
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  autoComplete="owner-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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
                  placeholder="Routing Number"
                  autoComplete="routing-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="AccountNumber"
                  name="AccountNumber"
                  type="text"
                  placeholder='Account Number'
                  autoComplete="account-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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
                  placeholder="Manager Email"
                  autoComplete="manager-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div>
                <input
                  id="PhoneProvider"
                  name="PhoneProvider"
                  type="text"
                  placeholder='Phone Provider'
                  autoComplete="phone-provider"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

        </div>

          <div className='flex justify-end mr-4 mt-5'>
            <button type='submit' style={{backgroundColor:'black', border: 'solid 2px #0773B3'}} 
            className='py-4 px-24 rounded-md text-white'>Sign Up</button>
           </div>
      </div>
    </form>
  )
}

export default BitrixSignupForm
    

