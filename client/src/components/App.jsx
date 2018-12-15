import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Login from './Login.jsx';
import Main from './Main.jsx';
import About from './About.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      db: [],
      loggedIn: false,
      currentUser: {}
    };
    this.checkPage = this.checkPage.bind(this);
    this.newUser = this.newUser.bind(this);
    this.existingUser = this.existingUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
    this.handleCompanies = this.handleCompanies.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
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
      return <Main about={this.handleAbout} company={this.handleCompanies} user={this.state.currentUser}/>
    }
    if(this.state.page === "About"){
      return <About home={this.handleHomePage} user={this.state.currentUser}/>
    }
    if(this.state.page === "Companies"){
      return <List data={this.state.db} home={this.handleHomePage}/>
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

  handleLogin(user){
    this.setState({
      page:"Main",
      loggedIn: true,
      currentUser: user
    })
    this.checkPage();
  }

  handleAbout(){
    this.setState({
      page:"About",
      loggedIn: false
    })
    this.checkPage();
  }

  handleCompanies(){
    this.setState({
      page:"Companies",
      loggedIn: false
    })
    this.checkPage();
  }

  handleHomePage(){
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
