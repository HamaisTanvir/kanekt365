import React from 'react'
// import {useRef, useEffect} from 'react'
import {useState, useEffect} from 'react'
import kanekt365Logo from '../assets/kanekt365Logo.png';
import {X, Menu, Search} from 'lucide-react';
import {navItems} from '../constants/index.jsx'

const Navbar = () => {
    const [mobileIconOpen, setmobileIconOpen] = useState(false);

    const toggleNabar = () =>{
        setmobileIconOpen(!mobileIconOpen);
    }
    
    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // {window.scrollY > 0 ? setShadow(true) : setShadow(false)}
            if (window.scrollY > 0) {
                setShadow(true);
              } else {
                setShadow(false);
              }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
        <nav className={`sticky top-0 z-50 py-3 bg-white ${shadow ? 'shadow-lg' : ''}`}>
            <div className="container px-4 mx-auto relative text-sm">

                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-20 w-25 mr-2" src={kanekt365Logo} alt="kanekt365Logo"/>
                    </div>
                        <ul className="hidden lg:flex ml-14 space-x-8">
                            {navItems.map((item, index) =>(
                                <li key={index} className='text-md font-semibold hover:text-blue-900'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    <div className="hidden lg:flex justify-center space-x-1 items-center">
                        <Search className='mr-2 text-md' />
                        <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3', border: 'solid 2px #0773B3'}} className='py-3 px-4  rounded-md text-white'>login</a>
                        <a href="https://hamaistanvir.com" style={{backgroundColor:'#0773B3', border: 'solid 2px #0773B3'}} className='py-3 px-4 rounded-md text-white'>Sign Up</a>
                        <a href="https://hamaistanvir.com" className='py-3 px-4 border-2 rounded-md border-orange-500 text-orange-600 text-md font-semibold'>Book Demo</a>
                    </div>
                     <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNabar}>
                            {mobileIconOpen ? <X /> : <Menu />}
                        </button>
                     </div>
                </div>
                     {mobileIconOpen && (
                         <div className="fixed right-0 z-20 w-full p-12 flex flex-col bg-white justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className='py-4 text-md text-center font-semibold hover:text-blue-900'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex space-x-3 mt-4">
                                <a href="https://hamaistanvir.com" className='py-3 px-4 rounded-md bg-blue-800 text-white'>login</a>
                                <a href="https://hamaistanvir.com" className=' py-3 px-4 rounded-md bg-blue-800 text-white'>Sign Up</a>
                                {/* <a href="https://hamaistanvir.com" className='py-3 px-4 rounded-md border-2 border-orange-500 text-orange-600 text-md font-semibold'>Book Demo</a> */}
                            </div>
                        </div>
                        
                     )}
                
            </div>
        </nav>

    )
}

export default Navbar