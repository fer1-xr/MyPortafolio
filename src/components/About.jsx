import React from 'react'
import Footer from './Footer';
import "./style/About.css"
import javascript from "./img/javascript.png"
import html from "./img/html.png"
import css from "./img/css.png"
import bootstrap from "./img/bootstrap.png"
import react from "./img/react.png"
import git from "./img/git.png"
import { Container} from 'react-bootstrap'
function About() {
  return (
    <main>
       <Container>
<div className="grid">
  <div className='tx  animate__animated animate__lightSpeedInLeft'>
        <h3 className="  firsta ">About Me</h3>
       
          
          
                <p className=' '>Hi! My name is Fernando Cano, I'm from Paraguay. I'm 22 years old and I love creating things, 
             especially with tecnologys. I have touched computer since I have memory, I can do it for free (joke)</p>
             <p className=' '> I work with  HTML5, CSS, Javascript, ReactJs, Bootstrap, Git and Netfily.
            Also I'm english speaker. 
</p>

             <p className=''>Got any questions? <a href='https://fernandocano.netlify.app/Contact'>Contact me</a></p>
          
             
  </div>
  <div className="div   animate__animated animate__lightSpeedInLeft ">
  <img src={html} alt="" className='image animate__animated  animate__fadeIn'/>
       <img src={css} alt="" className=' image'/>
       <img src={javascript} alt="" className='animate__animated  animate__fadeIn image'/>
       <img src={bootstrap} alt="" className='image'/>
       <img src={react} alt="" className='animate__animated  animate__fadeIn image'/>
       <img src={git} alt="" className=' image'/>
  </div>
  <div>

    </div>



   
</div>

</Container>
<div className="id"><Footer/></div>
</main>

  )
  
}

export default About