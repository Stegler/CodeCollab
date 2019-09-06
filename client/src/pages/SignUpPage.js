import React from "react";
import Kaskade from "../components/Jumbotron";
import SignUp from "../components/SignUp";

class SignUpPage extends React.Component {
    state = {
        title: "Sign Up"
    }
    
    render() {
        return (
            <div>
                <Kaskade title={this.state.title}/>
                <SignUp />
            </div>
        )
    }
};

export default SignUpPage;