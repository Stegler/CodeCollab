import React from "react";
import "./style.css";
import { Container, Col, Row, Image } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

// className="block-example border border-primary"

function MatchBox(props) {
    return (
        <Container>
            <Row className="left-container">
                <Col sm={2}>
                <Image className="matchImage" src={props.image} roundedCircle />
                </Col>
                <Col>
                <h1><MDBIcon style={{ float: "right", marginTop: "15px", marginRight: "20px" }} fab icon="github" /></h1>
                    <h1><MDBIcon style={{ float: "right", marginTop: "7px", marginRight: "15px" }} fab icon="linkedin" /></h1>
                    <Col>
                        <h1>{props.firstName} {props.lastName}</h1>
                        <h2><MDBIcon icon="user" /> {props.age}</h2>
                        <h2><MDBIcon icon="briefcase" /> {props.employment}</h2>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MatchBox;

