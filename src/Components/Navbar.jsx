import React from 'react'
// import {useRef, useEffect} from 'react'
import {useState, useEffect} from 'react'
import kanekt365Logo from '../assets/kanekt365Logo.png';
import {X, Menu, Search} from 'lucide-react';
import {navItems} from '../constants/index.jsx'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { useSelector, useDispatch } from 'react-redux';
import { fetchKanektPages } from '../redux/actions.js'

const Navbar = () => {
    const dispatch = useDispatch();
    const { loading, kanektPages, error } = useSelector(state => state);
  
    useEffect(() => {
      dispatch(fetchKanektPages());
    }, [dispatch]);

    const [mobileIconOpen, setMobileIconOpen] = useState(false);

    const toggleNavbar = () =>{
        setMobileIconOpen(!mobileIconOpen);
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
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
    
        <nav className={`sticky top-0 z-50 py-3 border border-b-gray-300 bg-white ${shadow ? 'shadow-lg' : ''}`}>
            <div className="container px-4 mx-auto relative text-sm">

                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <LazyLoad height={200} offset={100}>
                            <Link to='/'>
                                <img className="h-20 w-25 mr-2" src={kanekt365Logo} alt="kanekt365Logo"/>
                            </Link>
                        </LazyLoad>
                    </div>
        
                        <ul className="hidden md:flex ml-14 space-x-8">
                        {kanektPages && kanektPages.map(page =>(
                            page.isMenu && (
                            <LazyLoad height={200} offset={100}>
                                <li key={page.id}>
                                    {/* <Link to={data.slug}>{data.title.rendered}</Link> */}
                                    <h2>
                                      <Link to={page.slug} className='text-[14px] font-[700] uppercase tracking-[.5px] hover:text-[#0773b3] focus:text-[#0773b3]'>
                                        {page.title}
                                      </Link>
                                    </h2>
                                </li>
                            </LazyLoad>
                            )
                            ))} 
                        </ul>
                                {/* below 2 lines are alternative approach:- */}
                            {/* data.title.rendered !== "Bitrix Signup Stores" &&   <->
                            .filter((data) => !hiddenTitles.includes(data.title.rendered)) */}
                            
                             {/* !hiddenTitles.includes(data.title.rendered) && (
                              ) <-- */} 
                    <div className="hidden md:flex justify-center space-x-1 items-center">
                        <Search className='mr-2 text-md' />
                        <Link to="/login" style={{backgroundColor:'#0773B3', border: 'solid 2px #0773B3'}} 
                            className='py-3 px-4  rounded-md text-white'>login
                        </Link>
                        <Link to="/bitrixsignupform" style={{ backgroundColor: '#0773B3', border: 'solid 2px #0773B3' }} 
                            className='py-3 px-4 rounded-md text-white'>Sign Up
                        </Link>
                        <a href="/kanekt-resources?type=e-books" className='py-3 px-4 border-2 rounded-md border-orange-500 text-orange-500 
                            text-md font-semibold'>Book Demo
                        </a>
                    </div>
                     <div className="md:hidden sm:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileIconOpen ? <X /> : <Menu />}
                        </button>
                     </div>
                </div>
                     {mobileIconOpen && (
                         <div className="fixed md:hidden right-0 z-20 w-full p-12 flex flex-col bg-white justify-center items-center">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className='py-4 text-md text-center font-semibold hover:text-blue-900'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex space-x-3 mt-4">
                                <a href="/" className='py-3 px-4 rounded-md bg-blue-800 text-white'>login</a>
                                <a href="/" className=' py-3 px-4 rounded-md bg-blue-800 text-white'>Sign Up</a>
                                {/* <a href="/" className='py-3 px-4 rounded-md border-2 border-orange-500 text-orange-600 text-md font-semibold'>Book Demo</a> */}
                            </div>
                        </div>
                        
                     )}
                
            </div>
        </nav>
    </div>
    )
}

export default Navbar