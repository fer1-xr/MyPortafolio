import "./style/Accordion.css";
import {Accordion, Container} from 'react-bootstrap'

function Firstproject() {
   
  return (
   <Container>
  <Accordion className="accordion">
  <Accordion.Item eventKey="0" className='acc'>
    <Accordion.Header className="first"  >About this project</Accordion.Header>
    <Accordion.Body className="body" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
</Container>
 
  );
}

export default Firstproject