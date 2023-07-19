import React from "react";
import './Home.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">When Where Why</Navbar.Brand>
        <Nav.Link href="#home">Maps</Nav.Link>
        <Nav.Link href="#home">About</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;