import React from "react";
import "./style.css";
import { Container, Button, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

// className="block-example border border-primary"

function BoxLeft(props) {
    return (
      <Col className="left-container">
        <Container>
          <h1>{props.firstName}</h1>
          <h4>{props.lastName}</h4>
          <h1>{props.age}</h1>
          <h2>{props.employment}</h2>
          <Button onSubmit="null" type="submit" variant="info" size="lg" block><MDBIcon fab icon="github" className="pr-1" />Github</Button>
          <Button style={{marginTop: 10, marginBottom: 10}} onSubmit="null" type="submit" variant="info" size="lg" block><MDBIcon fab icon="linkedin" className="pr-1" />LinkedIn</Button>
        </Container>
      </Col>
    )
  }

export default BoxLeft;

