import "./style/Accordion.css";
import {Accordion, Container} from 'react-bootstrap'

function Firstproject() {
   
  return (
   <Container>
  <Accordion className="accordion">
  <Accordion.Item eventKey="0" className='acc'>
    <Accordion.Header className="first"  >About this project</Accordion.Header>
    <Accordion.Body className="body" >
    <h6>A simple Form that has two fields and a button. Built with HTML5, CSS and Javascript</h6>
    </Accordion.Body>
    
  </Accordion.Item>
  <div className="link1">
  <a href="https://incomparable-snickerdoodle-eea817.netlify.app" > Live </a>
     <a href="https://github.com/fer1-xr/Form-Validation"> Code</a>
  </div>
</Accordion>
</Container>
 
  );
}

export default Firstproject