import React from 'react';
import { Form, Col, Button, Row, Container } from 'react-bootstrap';
import "./style.css";

// className="block-example border border-primary"

class EditForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            zip: '',
            bio: '',
            skills: ''
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
        const { firstName, lastName, age, zip, bio, skills } = this.state
        return (
            <Container className="form-container">
                <Form>
                    {/* First Name input field */}

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

                    {/* Last Name input field */}

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

                    {/* Age input field */}

                    <Form.Group as={Row} controlId="age">
                        <Form.Label column sm={2}>Age</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                placeholder="25"
                                type="text"
                                name="age"
                                value={age}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    {/* Zip input field */}

                    <Form.Group as={Row} controlId="location">
                        <Form.Label column sm={2}>Zip</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                placeholder="55555"
                                type="text"
                                name="location"
                                value={zip}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    {/* Bio input field */}

                    <Form.Group as={Row} controlId="bio">
                        <Form.Label column sm={2}>Bio</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder="Tell us about yourself!"
                                type="text"
                                name="bio"
                                value={bio}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    {/* Skills input field */}

                    <Form.Group as={Row} controlId="skills">
                        <Form.Label column sm={2}>Skills</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder="What technologies do you know?"
                                type="text"
                                name="skills"
                                value={skills}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    {/* Submit */}

                    <Form.Group as={Row}>
                        <Col >
                            <Button style={{
                                float: "right"
                            }}onSubmit={this.submitHandler} type="submit" variant="info" size="lg">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default EditForm;
