import React from 'react'
import { quickLinks, quickLinksRest} from '../constants'
import { Link } from 'react-router-dom'
import footerDotMap from '../assets/footerDotMap.png'
import kanekt365LogoFooter from '../assets/kanekt365LogoFooter.png'
// import { useTranslation } from 'react-i18next'

const Footer = () => {
  return (
    <footer className='mt-20'>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-white pt-20 gap-4" style={{backgroundColor: '#252525', 
          backgroundImage: `url(${footerDotMap})`, 
          backgroundSize: 'auto', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'}}>
        
        <div className='flex flex-col justify-items-center items-center py-8'>
            <img className="h-28 w-32 mr-2" src={kanekt365LogoFooter} alt="kanekt365Logo"/>
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

      <div>
        <h3 className="text-xl font-bold pb-4 ">HeadQuarters</h3>
        <div className='space-y-1'>
            <p className='text-md font-light max-w-36'>585 Union Avenue Suite 7A Laconia New Hampshire, 03246</p>
        </div>  

        <h3 className="text-xl font-bold pt-4 pb-4 ">Our Newsletter</h3>
        <div className='space-y-1'>
            <p className='text-md font-light max-w-58'>Subscribe to Our Newsletter for Latest Updates</p>
        </div> 

      </div>

    </div>
  </footer>
  )
}

export default Footer