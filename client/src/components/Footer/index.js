import React from 'react';
import "./style.css";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
<Navbar fixed="bottom" expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand>CodeCollab - An app created by Mike, David, and Sam</Navbar.Brand>
  </Container>
</Navbar>
  );
}