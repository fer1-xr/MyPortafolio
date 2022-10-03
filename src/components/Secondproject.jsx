import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
function Secondproject() {
  return (
    <Container>
    <Accordion className="accordion">
    <Accordion.Item eventKey="0" className='acc'>
      <Accordion.Header  >About this project</Accordion.Header>
      <Accordion.Body className="body" >
     <h6> An API that returns a random tip on every click. 
     Built with Reactjs and Bootstrap </h6>
     
      </Accordion.Body>
    </Accordion.Item>
    <div className="link1">
   <a href="https://storied-cuchufli-2150fc.netlify.app/"> Live </a>
      <a href="https://github.com/fer1-xr/advice-generator"> Code</a>
  </div>
  </Accordion>
  </Container>
  )
}

export default Secondproject