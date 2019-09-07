import React from "react";
import Kaskade from "../components/Jumbotron";
import EditForm from "../components/EditForm";
import { Container } from 'react-bootstrap';

class EditPage extends React.Component {
    state = {
        title: "Edit"
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <Container style={{ paddingBottom: "25px" }}>
                    <EditForm />
                </Container>
            </div>
        )
    }
};

export default EditPage;