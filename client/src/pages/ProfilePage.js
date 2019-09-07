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
            employment: 'Krusty Krab',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo vitae lectus ultricies maximus et vitae risus. In sagittis venenatis dolor, vel laoreet massa consequat et. Nunc tempor aliquam leo, at auctor sem tempus vulputate. Suspendisse nec ante eros. Suspendisse potenti. Integer at posuere orci. Etiam a ipsum ut nisi finibus lobortis at at eros. Donec mattis varius lectus sed ultricies. Praesent eros lectus, sollicitudin at lacus vel, congue interdum diam. Duis tristique libero mi, sed tristique velit tincidunt vitae. Aliquam erat volutpat. Duis placerat, ipsum eu lobortis porttitor, nisi sem rhoncus nulla, vel faucibus sapien erat id lorem. Sed leo ex, consectetur in dolor vel, porttitor viverra odio. Praesent tellus nunc, luctus vel lacus in, gravida ullamcorper sapien. Duis sed lorem imperdiet, pellentesque est fringilla, dictum urna. Suspendisse erat ante, aliquam sit amet consectetur ut, blandit eget lectus.',
            skills: 'JavaScript, React, Mongo, Express, Java, mySQL, Mongoose, Axios, Bootstrap',
            image: "https://pbs.twimg.com/profile_images/1148974811537911809/FIqAfd0l_400x400.png"
        }
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <Container style={{paddingBottom: "25px"}}>
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

export default ProfilePage;

