import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'
import "./style/Work.css"
import FORM from "./img/FORM.png"
import project2 from "./img/project2.PNG"

import project from "./img/project.png"
import Firstproject from './Firstproject';
import Secondproject from './Secondproject';
import Thirdproject from './Thirdproject';
import Footer from './Footer';
function Work() {
  return (
  <div className='main'>
    <div className="container animate__animated animate__lightSpeedInLeft ">
      <h3 className='title animate__animated '>This is my three most important projects</h3>
    </div>
    <Container className='animate__animated animate__lightSpeedInLeft '>
  <Row>
 {/* First column */}
    <Col lg={4} className='project-title'>
      <h6 className='txt'>Login Form</h6>
      <img src={FORM} alt="" className='images' />
      <div className='first'>
      <Firstproject />
      </div>
      
    
    </Col>
{/* Second column */}
    <Col lg={4} className='project-title'>
      <h6 className='txt'>Advice Generator</h6>
    <img src={project2} alt="" className='images'/>
    <Secondproject  />
    </Col>

{/* Three column */}
    <Col lg={4} className='project-title' >
    <h6 className='tixt'>BookStore Web</h6>
    <img src={project} alt="" className='images'/>
   < Thirdproject />
    </Col>
  </Row>

</Container>
<Footer/>


  </div>
  )
 
}

export default Work
