import React from "react";
import "./style/Contact.css";

import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import Footer from './Footer';
import { Container} from 'react-bootstrap'
import emailjs from '@emailjs/browser';

function Contact() {    function enviarEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_tsfq75n','template_ku3fuml',e.target,'qz2uWVXzYpsfiuiNo').then(res=>{
      console.log(res);
  })
}
return ( 
<main>
  <Container >
    <div className="b animate__animated  animate__lightSpeedInLeft">
  <div className="containerr animate__animated  animate__lightSpeedInLeft">
  <div className="caja">
      <div className="border"style={{width:"80%",backgroundColor:"lightgrey",margin:"0 auto", padding:"10px"}}>
          <h1>Contact me</h1>
          <hr/>
          <form onSubmit={enviarEmail}>
              <div className="form-row">
                  <div className="form-group col-md-6">
                   
                    <div className="caja1">  <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name"/></div>
                  </div>
                  <div className="form-group col-md-6">
                    
                      <div className="caja1"><input type="text" className="form-control" id="email" name="email" placeholder="Email"/></div>
                  </div>
              </div>
              <div className="form-group">
                 
                <div className="caja1">  <textarea type="text" className="form-control" id="mensaje" name="mensaje" placeholder="Message"></textarea></div>
              </div>
              <button type="submit" className="btn btn-primary" style={{width:"100%", margin:"0 auto",marginTop:"20px"}}>Send</button>
          </form>
      </div>
  </div>

  </div>

  <div className="social">
        <div className="paragraph">
        Or, contact me trough my social media:
        </div>
    
        <div className="icn">
        <a href="https://www.linkedin.com/in/fernando-paez-3004aa173/"> <img src={linkedin} alt="" className="img" /> </a> </div>
        <div className="icn"><a href="https://github.com/fer1-xr">    <img src={github} alt="" className="img"  /> </a></div>
 
    </div>   
  </div>
</Container>
<div className="id"><Footer/></div>
</main>
)
}


export default Contact;
