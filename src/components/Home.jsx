import React from 'react'
import "./style/Home.css"

import {  Link } from "react-router-dom";
import gamer from './img/gamer.png';
import Footer from './Footer';
import Work from './Work';
import About from './About';
import Contact from './Contact';
function Home() {
  return (
    <div className="box">
      
          <div className='container animate__animated  animate__fadeIn'> 
          <hr />
            <h3 className='Hi'> Hi! My name is Fernando.</h3>
            <h4 className='Im'>I'm a Front-ed Developer</h4>
            <img src={gamer} alt="" className='image'/>
            <Link to="/Work" className='View' >View my projects</Link>
          </div>
     <About/>
     <Work/>
     <Contact/>
     <Footer/>
        
   </div>
  
  )
}

export default Home