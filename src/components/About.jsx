import React from 'react'
import Footer from './Footer';
import "./style/About.css"
function About() {
  return (
  <main className='main'>
<div>
  <h3 className="  firsta container animate__animated  animate__fadeIn">About Me</h3>
  <div className="container animate__animated  animate__fadeIn paragraph">
  <p >Hi! My name is Fernando Cano, I'm from Paraguay. I'm 22 years old and I love creating things, 
    especially with tecnologys. I hava otuched computer since I have memory, I can do it for free (joke)</p>
    <p > I master and work with advanced Html Css, Javascript, React Js, Bootstrap, Git and Netfily.
    Also I'm have strong english comunication, I have an excellent communication in English (b2) I learned it watching the simpsons, so the jokes will not be missing.</p>
   <p>So, if you're interesting, <a href='http://localhost:3000/Contact'>Contact me</a></p>
  </div>
 
</div>
<Footer />
  </main>

    
  )
  
}

export default About