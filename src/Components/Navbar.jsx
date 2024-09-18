import React from 'react'
// import {useRef, useEffect} from 'react'
import {useState, useEffect} from 'react'
import kanekt365Logo from '../assets/kanekt365Logo.png';
import {X, Menu, Search} from 'lucide-react';
import {navItems} from '../constants/index.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [kanektData, setKanektData] = useState([]);

    useEffect(()=>{
        // axios.get('https://cors-anywhere.herokuapp.com/https://ck.getmobile.pk/api/pages')
        // axios.get('https://ck.getmobile.pk/api/pages')
        axios.get('https://test.kanekt365.com/api/pages/all')
        .then(res => {
            setKanektData(res.data);
            const data = res.data
            console.log(data);
        })
        // fetch('https://kanekt365.com/wp-json/wp/v2/pages?status=publish')
        // .then(res => res.json())
        // .then(data => {
        //     setKanektData(data);
        // })

        .catch(err => console.error('errorr:', err));
    }, []);

    // const hiddenTitles = [
    //     "Bitrix Signup Stores",
    //     "Sign up stores",
    //     "Bitrix Signup Store",
    //     "Bitrix Signup Upload New"
    //   ];

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
        <nav className={`sticky top-0 z-50 py-3 border border-b-gray-300 bg-white ${shadow ? 'shadow-lg' : ''}`}>
            <div className="container px-4 mx-auto relative text-sm">

                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Link to='/'>
                            <img className="h-20 w-25 mr-2" src={kanekt365Logo} alt="kanekt365Logo"/>
                        </Link>
                    </div>
                        {/* <ul className="hidden md:flex ml-14 space-x-8">
                            {navItems.map((item, index) =>(
                                <li key={index} className='text-md font-semibold hover:text-blue-900'>
                                    <Link to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul> */}
                        <ul className="hidden md:flex ml-14 space-x-8">
                        {kanektData.map((data) =>(
                                <li key={data.id} className='text-md font-semibold hover:text-blue-900'>
                                    {/* <Link to={data.slug}>{data.title.rendered}</Link> */}
                                   <Link to={kanektData.slug}><h2>{data.title}</h2></Link>
                                   <h2>{data.id}</h2>
                                </li>
                            ))}
                        </ul>
                                {/* below 2 lines are alternative approach:- */}
                            {/* data.title.rendered !== "Bitrix Signup Stores" &&   <->
                            .filter((data) => !hiddenTitles.includes(data.title.rendered)) */}
                            
                             {/* !hiddenTitles.includes(data.title.rendered) && (
                              ) <-- */} 
                    <div className="hidden md:flex justify-center space-x-1 items-center">
                        <Search className='mr-2 text-md' />
                        <Link to="/blogs" style={{backgroundColor:'#0773B3', border: 'solid 2px #0773B3'}} 
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

    )
}

export default Navbar