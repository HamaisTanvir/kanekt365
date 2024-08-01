import React from 'react'
import { quickLinks, quickLinksRest} from '../constants'
import { Link } from 'react-router-dom'
import footerDotMap from '../assets/footerDotMap.png'
import kanekt365LogoFooter from '../assets/kanekt365LogoFooter.png'
import { SocialIcon } from 'react-social-icons'
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
  return (
    <footer className='mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-4 text-white p-8 gap-0 space-y-4 md:space-y-0" style={{backgroundColor: '#212121'}}>
        
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
          <SettingsPhoneOutlinedIcon className='' sx={{fontSize: '55px', fontWeight: '300', color:'#0773b3'}}/>
            <div>
              <h2 className='text-md font-light pb-1'>Phone number</h2>
              <a className='text-md font-bold' href="tel:(830) 630-8300">(833) 346-3446</a>
            </div>
        </div>

        <div className='flex space-x-4 mr-0 ml-0 pl-0 pr-0'>
          <DraftsOutlinedIcon className='' sx={{fontSize: '55px', fontWeight: '300', color:'#0773b3'}}/>
            <a className='text-md text-md pt-4' href='mailto:info@kanekt365.com'>info@kanekt365.com</a>
        </div>

        <div className='flex space-x-4 md:space-x-2'>
          <LocationOnOutlinedIcon className='' sx={{fontSize: '55px', fontWeight: '300', color:'#0773b3'}}/>
            <div>
              <h2 className='text-md font-light pb-1'>Our Address</h2>
              <p className='text-md font-semibold max-w-64'>585 Union Avenue Suite 7A Laconia New Hampshire, 03246</p>
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
            <h3 className='max-w-72 px-1 pt-5'>
              We are a QSR call center located in Laconia, NH, specializing in order taking for the pizza industry.
            </h3>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 ml-10">Quick Links</h3>
          <div className='flex mb-10 font-light'>
            <ul className='space-y-3'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link className='p-10' to={link.href}> {link.text}</Link>
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
        <h3 className="text-xl font-bold mb-4 ">Help Desk</h3>
        <div className='space-y-1'>
            <h2 className='text-md font-light'>Monday - Thursday</h2>
            <h2 className='text-md font-light'>9am to 3am EST</h2>
            <div className='pt-1'>
              <a className='text-md font-semibold' href="tel:(830) 630-8300">(830) 630-8300</a>
            </div>
            <div>
              <a className='text-md font-semibold' href='mailto:support@kanekt365.com'>support@kanekt365.com</a>
            </div>
        </div>

        <h3 className="text-xl font-bold pt-4 pb-4 ">Sales</h3>
        <div className='space-y-1'>
            <h2 className='text-md font-light'>Monday - Friday</h2>
            <h2 className='text-md font-light'>9am to 5pm EST</h2>
            <h2 className='text-md font-light'>Sat-Sun: Closed</h2>
            <h2 className='text-md font-light'>Call Center 24/7/365</h2>
        </div>

      </div>

      <div className='mr-16'>
        <h3 className="text-xl font-bold pb-4 ">HeadQuarters</h3>
        <div className='space-y-1'>
            <p className='text-md font-light max-w-36'>585 Union Avenue Suite 7A Laconia New Hampshire, 03246</p>
        </div>  

        <h3 className="text-xl font-bold pt-4 pb-4 ">Our Newsletter</h3>
        <div className='space-y-1'>
            <p className='text-md font-light max-w-53'>Subscribe to Our Newsletter for Latest Updates</p>
        </div> 

      </div>

    </div>
  </footer>
  )
}

export default Footer