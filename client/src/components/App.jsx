import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Login from './Login.jsx';
import Main from './Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      db: [],
      loggedIn: false
    };
    this.checkPage = this.checkPage.bind(this);
    this.newUser = this.newUser.bind(this);
    this.existingUser = this.existingUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.checkPage();
    axios
      .get("/user")
      .then(response => {
        console.log("this is the response", response.data);
        this.setState({
          db: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
      console.log('this is the state', this.state)
  }

  checkPage() {
    if (this.state.page === "home") {
      return <Home new={this.newUser} old={this.existingUser}/>;
    }
    if (this.state.page === "Signup") {
      return <SignUp />;
    }
    if (this.state.page === "Login") {
      return <Login data={this.state.db} login={this.handleLogin}/>;
    }
    if(this.state.loggedIn === true){
      return <Main />
    }
  }

  newUser() {
    this.setState({
      page: "Signup"
    });
    this.checkPage();
  }

  existingUser() {
    this.setState({
      page: "Login"
    });
    this.checkPage();
  }

  handleLogin(){
    this.setState({
      page:"Main",
      loggedIn: true
    })
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
