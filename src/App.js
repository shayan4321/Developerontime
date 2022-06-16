import React from 'react';
import './App.css';
import Home  from './Component/Home';
import Navbar from './Component/Navbar';
import LogoDesign from './Component/Pages/Logo-Design/LogoDesign';
import WebsiteDesign from './Component/Pages/Website-Design/WebsiteDesign';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/logo-design' element={<LogoDesign />} />
          <Route exact path='/website-design-development' element={<WebsiteDesign />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
