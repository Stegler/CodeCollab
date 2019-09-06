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
            title: 'Search',
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
                    <Button variant="danger" size="lg" style={{float: "left"}}><MDBIcon icon="times" /></Button>
                    <Button variant="success" size="lg" style={{float: "right"}}><MDBIcon fab icon="connectdevelop" /></Button>
                    <ProfileImage image={this.state.image}/>
                    <Row>
                        <BoxLeft  
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        age={this.state.age}
                        employment={this.state.employment}
                        />
                        <BoxMiddle
                        bio={this.state.bio} 
                        />
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