import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Brilliant Registry</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">James</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};
export default Header;