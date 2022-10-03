import React from 'react'
import "./style/Navigation.css"
import { Link } from "react-router-dom"
import {Navbar, Container, Nav} from 'react-bootstrap'
export default function Navigation() {
  
  
  return (
    <Navbar  className ="Navbar"expand="lg" variant="dark"  fixed="top">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link}to="/Work">Work</Nav.Link>
        <Nav.Link as={Link} to="/About">About</Nav.Link>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
