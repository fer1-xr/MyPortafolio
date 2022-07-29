import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
function Thirdproject() {
  return (
    <Container>
    <Accordion className="accordion">
    <Accordion.Item eventKey="0" className='acc'>
      <Accordion.Header  >About this project</Accordion.Header>
      <Accordion.Body className="body" >
       <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor 
       
       </h6>
      </Accordion.Body>
    </Accordion.Item>
    <div className="link1">
  <a href="" > Live </a>
     <a href=""> Code</a>
  </div>
  </Accordion>
  </Container>
  )
}

export default Thirdproject