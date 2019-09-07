import React from 'react';
import { Form, Col, Button, Row, Container } from 'react-bootstrap';
import "./style.css";

// className="block-example border border-primary"

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  // Gets value of each input field and sets it to the correct state property
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  // POST to db
  submitHandler = (e) => {
    e.preventDefault()
    // This function fires when Submit button is clicked. May need code to post to database.
  }

  render() {
    const { firstName, lastName, email, password } = this.state
    return (
      <Container className="signup-container">
        <Form>
          <Form.Group as={Row} controlId="firstname">
            <Form.Label column sm={2}>First Name</Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="John"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="lastname">
            <Form.Label column sm={2}>Last Name</Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="Doe"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="johndoe@mail.com"
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password">
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder="XXXXX"
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col >
              <Button style={{float: "right"}} onSubmit={this.submitHandler} type="submit" variant="info" size="lg">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
