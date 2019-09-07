import React from "react";
import "./style.css";
import Kaskade from "../components/Jumbotron";
import ProfileImage from "../components/ProfileImage"
import { Container, Row, Button } from 'react-bootstrap';
import BoxLeft from "../components/BoxLeft";
import BoxMiddle from "../components/BoxMiddle";
import BoxRight from "../components/BoxRight";
import { MDBIcon } from 'mdbreact';

// className="block-example border border-primary"

class SearchPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // masterList: [],
            title: 'Browse',
            firstName: 'Mr.',
            lastName: 'Crabs',
            age: '40',
            employment: 'GrubHub',
            zip: '98516',
            bio: 'Hello, my name is Mr. Krabs.',
            skills: 'JavaScript, React, Mongo, Express, Java, mySQL, Mongoose, Axios, jQuery, PHP, C++',
            image: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/11/pri_61620655.jpg?quality=90&strip=all&zoom=1&resize=644%2C480&ssl=1'
        }
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <Container>
                    <Button className="buttonShadow" variant="danger" size="lg" style={{ float: "left", marginLeft: "150px", marginTop: "180px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}><MDBIcon icon="times" /></Button>
                    <Button className="buttonShadow" variant="success" size="lg" style={{ float: "right", marginRight: "150px", marginTop: "180px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}><MDBIcon icon="check" /></Button>
                    <ProfileImage image={this.state.image} />
                    <Row>
                        <BoxLeft
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            age={this.state.age}
                            employment={this.state.employment}
                        />
                    </Row>
                    <Row>
                        <BoxMiddle
                            bio={this.state.bio}
                        />
                    </Row>
                    <Row>
                        <BoxRight
                            skills={this.state.skills}
                        />
                    </Row>
                </Container>
            </div>
        )
    }
};

export default SearchPage;