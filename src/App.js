import React from 'react'
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Homepage from './Components/Homepage';
import BitrixSignupForm from './Components/BitrixSignupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import BlogsMain from './Pages/BlogsMain';
import BlogsInner from './Pages/BlogsInner';
import { blogsMainPosts } from './constants';
import EBooksMain from './Pages/EBooksMain';
import EBooksInner from './Pages/EBooksInner';
import ContactUs from './Components/ContactUs';

const App = () => {
  return (
    <Router>
        <TopBar />
        <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/blogs' element={<BlogsMain />}/>
        {/* <Route path='/:slug' element={<BlogsInner blogs ={blogsMainPosts}/>}/>   */}
        <Route path='/:slug' element={<BlogsInner blogs ={blogsMainPosts}/>}/>  
        <Route path= '/kanekt-resources' element= {<EBooksMain />}/>
        <Route path= '/resources/:slug' element={<EBooksInner />}/>
        <Route path='/bitrixsignupform' element={<BitrixSignupForm />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App