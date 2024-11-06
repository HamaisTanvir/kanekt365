import React, { useEffect, useState } from 'react'
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
import Login from './Components/Login'
import ProtectedRoute from './Routes/ProtectedRoutes'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect (() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); //keeps truthy to truth & falsy to false 
  },[]);

  return (
    <Router>
        {isAuthenticated && < TopBar />}
        {isAuthenticated && <Navbar />}
      <Routes>
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
      
      {/* ........Protected Routes........ */}
      <Route path="/" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><BlogsMain /></ProtectedRoute>} />
        <Route path="/blogs/:slug" element={<ProtectedRoute><BlogsInner /></ProtectedRoute>} />
        <Route path="/kanekt-resources" element={<ProtectedRoute><EBooksMain /></ProtectedRoute>} />
        <Route path="/resources/:slug" element={<ProtectedRoute><EBooksInner /></ProtectedRoute>} />
        <Route path="/bitrixsignupform" element={<ProtectedRoute><BitrixSignupForm /></ProtectedRoute>} />
        <Route path="/contact-us" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
        <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
        <Route path="/our-service" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/service/:slugS" element={<ProtectedRoute><ServicesInner sData={cData} /></ProtectedRoute>} />
      </Routes>
 
      { isAuthenticated && <Footer />}
    </Router>
  );
}

export default App