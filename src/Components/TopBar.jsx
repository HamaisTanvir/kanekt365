import React from 'react'
import {Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram} from 'lucide-react'

const TopBar = () => {
  return (
    <div className='sticky hidden lg:flex h-14' style={{backgroundColor: '#f6931e'}}>
        <div className="container flex justify-between items-center mx-auto">
            <div className='flex space-x-8 ml-4'>
              <span className='flex space-x-4 text-sm text-white items-center'> <Phone size={16}/>  <h1>Make a call: (833) 346-3446 </h1> </span>
              <span className='flex space-x-4 text-sm text-white items-center'> < Mail size={16}/> <h1>  Email: info@kanekt365.com</h1> </span>
            </div>

            <div className=' flex space-x-8 mr-20'>
              <Facebook size={20} className='text-white' />
              <Twitter size={20} className='text-white' />
              <Linkedin size={20} className='text-white' />
              <Youtube size={20} className='text-white' />
              <Instagram size={20} className='text-white' />
            </div>
        </div>
    </div>
  )
}

export default TopBar