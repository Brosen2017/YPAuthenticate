import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      existing: []
    };
    this.checkPage = this.checkPage.bind(this);
    this.newUser = this.newUser.bind(this);
    this.existingUser = this.existingUser.bind(this);
  }

  componentDidMount() {
    this.checkPage();
    axios
      .get("/user")
      .then(response => {
        console.log("this is the response", response.data);
        this.setState({
          existing: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkPage() {
    // console.log(this.state.page);
    if (this.state.page === "home") {
      return <Home new={this.newUser} old={this.existingUser}/>;
    }
    if (this.state.page === "Signup") {
      return <SignUp />;
    }
    if (this.state.page === "Login") {
      return <Login />;
    }
  }

  newUser() {
    this.setState({
      page: "Signup"
    });
    this.checkPage();
    console.log('ive been clicked', this.state.page)
  }

  existingUser() {
    this.setState({
      page: "Login"
    });
    this.checkPage();
  }

  render() {
    return (
      <div>
        {this.checkPage()}
      </div>
    );
  }
}

export default App;
