import React from 'react';
import "./style.css";
import { Nav, Navbar, } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

export default function Navigation() {
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand><MDBIcon fab icon="connectdevelop" /> CodeCollab</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="/search">Browse</Nav.Link>
          <Nav.Link href="/search">Matches</Nav.Link>
        </Nav>
      <Nav.Link style= {{ color: "white" }} href="#memes">Welcome, David</Nav.Link>
      </Navbar>
  );
};