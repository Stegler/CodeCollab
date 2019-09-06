import React from "react";
import "./style.css";
import { Container, Col } from 'react-bootstrap';

// className="block-example border border-primary"
function BoxRight(props) {
    return (
      <Col className="right-container">
        <Container>
          <h1>{props.skills}</h1>
        </Container>
      </Col>
    )
  }

export default BoxRight;

