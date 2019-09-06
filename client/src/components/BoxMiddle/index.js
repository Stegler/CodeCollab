import React from "react";
import "./style.css";
import { Container, Col } from 'react-bootstrap';

// className="block-example border border-primary"

function BoxMiddle(props) {
    return (
      <Col className="middle-container">
        <Container>
          <h1>Bio</h1>
          <p>{props.bio}</p>


        </Container>
      </Col>
    )
  }

export default BoxMiddle;

