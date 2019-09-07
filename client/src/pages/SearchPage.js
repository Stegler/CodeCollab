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
            lastName: 'Krabs',
            age: '40',
            employment: 'Krusty Krab',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo vitae lectus ultricies maximus et vitae risus. In sagittis venenatis dolor, vel laoreet massa consequat et. Nunc tempor aliquam leo, at auctor sem tempus vulputate. Suspendisse nec ante eros. Suspendisse potenti. Integer at posuere orci. Etiam a ipsum ut nisi finibus lobortis at at eros. Donec mattis varius lectus sed ultricies. Praesent eros lectus, sollicitudin at lacus vel, congue interdum diam. Duis tristique libero mi, sed tristique velit tincidunt vitae. Aliquam erat volutpat. Duis placerat, ipsum eu lobortis porttitor, nisi sem rhoncus nulla, vel faucibus sapien erat id lorem. Sed leo ex, consectetur in dolor vel, porttitor viverra odio. Praesent tellus nunc, luctus vel lacus in, gravida ullamcorper sapien. Duis sed lorem imperdiet, pellentesque est fringilla, dictum urna. Suspendisse erat ante, aliquam sit amet consectetur ut, blandit eget lectus. Sed eu rhoncus mauris. Mauris ultrices eu augue vel efficitur. Etiam ac felis eget lorem imperdiet facilisis a vel velit. Nulla nibh purus, ultricies non tortor sit amet, efficitur maximus libero. Praesent volutpat lectus vitae turpis tincidunt, vel vulputate enim luctus. Suspendisse risus diam, scelerisque a dui eget, elementum vehicula turpis. Suspendisse fermentum quam metus, vel molestie lorem ultricies eu. Ut quis urna odio.',
            skills: 'JavaScript, React, Mongo, Express, Java, mySQL, Mongoose, Axios, jQuery, PHP, C++',
            image: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/11/pri_61620655.jpg?quality=90&strip=all&zoom=1&resize=644%2C480&ssl=1'
        }
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <Container style={{paddingBottom: "25px"}}>
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