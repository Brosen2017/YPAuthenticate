import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    };
  }

  componentDidMount() {
    axios
      .get("/user")
      .then(response => {
        console.log("this is the response", response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Hi from React!</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
