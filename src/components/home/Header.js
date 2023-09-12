import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color: "white"}} href="#home">
          <img
           alt=""
           src="/logo192.png"
           width="30"
           height="30"
           className="d-inline-block align-top"
          />{' '}
          When Where Why
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;