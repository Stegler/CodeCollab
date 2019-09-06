import React from 'react';
import { Form } from 'react-bootstrap';


export default function EditBio() {

  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Bio</Form.Label>
    <Form.Control as="textarea" rows="10" />
</Form.Group>
  );
}