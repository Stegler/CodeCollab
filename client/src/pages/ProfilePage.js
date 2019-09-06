import React from "react";
import "./style.css";
import Kaskade from "../components/Jumbotron";
import ProfileImage from "../components/ProfileImage"
import { Container, Row } from 'react-bootstrap';
import BoxLeft from "../components/BoxLeft";
import BoxMiddle from "../components/BoxMiddle";
import BoxRight from "../components/BoxRight";

// className="block-example border border-primary"

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Profile',
            firstName: 'Spongebob',
            lastName: 'Squarepants',
            age: '26',
            zip: '98516',
            bio: 'Hello, my name is Spongebob.',
            skills: 'JavaScript, React, Mongo, Express, Java, mySQL, Mongoose, Axios',
            image: "https://pbs.twimg.com/profile_images/1148974811537911809/FIqAfd0l_400x400.png"
        }
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <Container>
                    <ProfileImage image={this.state.image} />
                    <Row>
                        <BoxLeft
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            age={this.state.age}
                            zip={this.state.zip}
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

export default ProfilePage;

