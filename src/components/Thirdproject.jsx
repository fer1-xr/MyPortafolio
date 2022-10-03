import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
function Thirdproject() {
  return (
    <Container>
    <Accordion className="accordion">
    <Accordion.Item eventKey="0" className='acc'>
      <Accordion.Header  >About this project</Accordion.Header>
      <Accordion.Body className="body" >
       <h6> A simple e-commerce about a book store.
Still needs some tweaks.
Made with ReactJs and Bootstrap.
       
       </h6>
      </Accordion.Body>
    </Accordion.Item>
    <div className="link1">
    <a href="https://vermillion-crostata-3fa224.netlify.app/"> Live </a>
      <a href="https://github.com/fer1-xr/delfondo"> Code</a>
  </div>
  </Accordion>
  </Container>
  )
}

export default Thirdproject