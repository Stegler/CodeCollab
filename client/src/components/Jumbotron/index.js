import React from 'react';
import "./style.css";
import { Container, Col } from 'react-bootstrap';

// block-example border border-primary


function Kaskade(props) {
    return (
        <Container className="title-container" fluid>
            <Col md={{ span: 6, offset: 2 }}>
                <h1 className="title">{props.title}</h1>
            </Col>
        </Container>

    );
};

export default Kaskade;