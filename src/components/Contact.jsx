import React from 'react'
import "./style/Contact.css"
import mail from './img/mail.png'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import Footer from './Footer'

function Contact() {
  return (
    <main >
  <div className='container animate__animated  animate__fadeIn txt'>If you want to contact Im open to talk. Contacto trough my social media.</div>
  <div className='img animate__animated  animate__fadeIn'>
  <img src={mail} alt="" />
  <img src={linkedin} alt="" />
  <img src={github} alt="" />
  
  </div>
  <a href="download/Fernando Cano-CV (2)" download="Fernando Cano-CV (2).word" className='link'>Download CV</a>
 <Footer/>
    </main>
 
  )
}

export default Contact