import React from "react";
import "./style.css";
import Kaskade from "../components/Jumbotron";
import { Container, Row } from 'react-bootstrap';
import MatchBox from "../components/MatchBox";

// className="block-example border border-primary"

class MatchesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Matches',
            firstNames: {
                sandy: 'Sandy',
                squidward: 'Squidward'
            },
            lastNames: {
                cheeks: 'Cheeks',
                tentacles: 'Tentacles'
            },
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
                <Container style={{ paddingBottom: "25px" }}>
                    <Row>
                        <MatchBox
                            firstName={this.state.firstNames.sandy}
                            lastName={this.state.lastNames.cheeks}
                            age={this.state.age}
                            employment={this.state.employment}
                        />
                    </Row>
                    <Row>
                        <MatchBox
                            firstName={this.state.firstNames.squidward}
                            lastName={this.state.lastNames.tentacles}
                            age={this.state.age}
                            employment={this.state.employment}
                        />
                    </Row>
                </Container>
            </div>
        )
    }
};

export default MatchesPage;

