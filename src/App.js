import React from 'react'
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Homepage from './Components/Homepage';
import BitrixSignupForm from './Components/BitrixSignupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <TopBar />
        <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/bitrixsignupform' element={<BitrixSignupForm />}/>
      </Routes>
    </Router>
  );
}

export default App