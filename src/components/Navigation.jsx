import React from 'react'
import "./style/Navigation.css"

import {Navbar, Container, Nav} from 'react-bootstrap'
export default function Navigation() {
  
  
  return (
    <Navbar  className ="Navbar"expand="lg" variant="dark">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Work">Work</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
