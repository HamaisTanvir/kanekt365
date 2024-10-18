import React from 'react'
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Homepage from './Components/Homepage';
import BitrixSignupForm from './Components/BitrixSignupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import BlogsMain from './Pages/BlogsMain';
import BlogsInner from './Pages/BlogsInner';
import { cData } from './constants';
import EBooksMain from './Pages/EBooksMain';
import EBooksInner from './Pages/EBooksInner';
import ContactUs from './Components/ContactUs';
import Pricing from './Components/Pricing'
import Services from './Components/Services'
import ServicesInner from './Components/ServicesInner'

const App = () => {
  return (
    <Router>
        <TopBar />
        <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/blogs' element={<BlogsMain />}/>
        {/* <Route path='/:slug' element={<BlogsInner blogs ={blogsMainPosts}/>}/>   */}
        <Route path='/blogs/:slug' element={<BlogsInner/>}/>  
        <Route path= '/kanekt-resources' element= {<EBooksMain />}/>
        <Route path= '/resources/:slug' element={<EBooksInner />}/>
        <Route path='/bitrixsignupform' element={<BitrixSignupForm />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/our-service' element={<Services />}/>
        <Route path='/service/:slugS' element={<ServicesInner sData={cData}/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App