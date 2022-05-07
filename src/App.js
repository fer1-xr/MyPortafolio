import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from './components/Navigation'

import Work from "./components/Work"


function App() {
  return (
   
   <div >
    <BrowserRouter>
    <Navigation/>
    
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
   
    </div>
   
  );
}

export default App;
