import React from "react";
import Kaskade from "../components/Jumbotron";
import EditForm from "../components/EditForm";

class EditPage extends React.Component {
    state = {
        title: "Edit"
    }

    render() {
        return (
            <div>
                <Kaskade title={this.state.title} />
                <EditForm />
            </div>
        )
    }
};

export default EditPage;