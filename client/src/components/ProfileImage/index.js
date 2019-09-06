import React from 'react';
import "./style.css";
import { Row, Image } from 'react-bootstrap';

// className="block-example border border-primary"

export default function ProfileImage(props) {
    return (
        <Row className="image-container">
            <Image className="image" src={props.image} roundedCircle />
        </Row>
    )
};