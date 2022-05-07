import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'
import "./style/Work.css"
import FORM from "./img/FORM.png"
import COUNTDOWN from "./img/COUNTDOWN.png"
import multipage from "./img/multipage.png"
import Firstproject from './Firstproject';
import Secondproject from './Secondproject';
import Thirdproject from './Thirdproject';
import Footer from './Footer';
function Work() {
  return (
  <div className='main'>
    <div className="container ">
      <h3 className='title animate__animated animate__fadeIn'>This is my three most important projects</h3>
    </div>
    <Container className='animate__animated animate__fadeIn'>
  <Row>
 {/* First column */}
    <Col lg={4} className='project-title'>
      <h6 className='title'>Login Form</h6>
      <img src={FORM} alt="" className='images' />
      <div className='first'>
      <Firstproject />
      </div>
      
    
    </Col>
{/* Second column */}
    <Col lg={4} className='project-title'>
      <h6 className='title'>Project2</h6>
    <img src={COUNTDOWN} alt="" className='images'/>
    <Secondproject  />
    </Col>

{/* Three column */}
    <Col lg={4} className='project-title' >
    <h6 className='title'>Project2</h6>
    <img src={multipage} alt="" className='images'/>
   < Thirdproject />
    </Col>
  </Row>

  <h5 className='h5'><a href='http://localhost:3000/About'>Then, who are you?</a></h5>
</Container>

<Footer/>

  </div>
  )
 
}

export default Work
