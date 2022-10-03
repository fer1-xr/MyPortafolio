import React from "react";
import "./style/Contact.css";

import linkedin from "./img/linkedin.png";
import github from "./img/github.png";


import emailjs from '@emailjs/browser';

function Contact() {    function enviarEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_tsfq75n','template_ku3fuml',e.target,'qz2uWVXzYpsfiuiNo').then(res=>{
      console.log(res);
  })
}
return (
    <div className="container ">
  <div className="containerr animate__animated  animate__lightSpeedInLeft">
  <div style={{width:"100%",margin:"0 auto", marginTop:"155px" }}>
      <div className="border"style={{width:"80%",backgroundColor:"lightgrey",margin:"0 auto", padding:"10px"}}>
          <h1>Contact me</h1>
          <hr/>
          <form onSubmit={enviarEmail}>
              <div className="form-row">
                  <div className="form-group col-md-6">
                      <label><b>Name</b></label>
                      <input type="text" className="form-control" id="nombre" name="nombre"/>
                  </div>
                  <div className="form-group col-md-6">
                      <label><b>Email</b></label>
                      <input type="text" className="form-control" id="email" name="email"/>
                  </div>
              </div>
              <div className="form-group">
                  <label><b>Message</b></label>
                  <textarea type="text" className="form-control" id="mensaje" name="mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width:"50%", margin:"0 auto",marginTop:"20px"}}>Send</button>
          </form>
      </div>
  </div>
<p className="tt">Or send me a message through my social media</p>
  <div className="social">
        
        
          
  <a href="https://www.linkedin.com/in/fernando-paez-3004aa173/"> <img src={linkedin} alt="" className="img" /> </a>
    <a href="https://github.com/fer1-xr">    <img src={github} alt="" className="img"  /> </a>
        </div>
    
  </div>

  </div>
  
)
}


export default Contact;
