import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditPage from "./pages/EditPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SignUpPage from "./pages/SignUpPage";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    login: 0,
    status: "Login"
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/edit" component={EditPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
          <br></br><br></br><br></br><br></br>
          <Footer />
        </div>
      </Router >
    );
  }
}

export default App;