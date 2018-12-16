import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Login from './Login.jsx';
import Main from './Main.jsx';
import About from './About.jsx';
import List from './List.jsx';
import Profile from './Profile.jsx';
import cookie from 'js-cookie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: cookie.get('logCheck'),
      db: [],
      loggedIn: false,
      currentUser: {},
      favorite:[]
    };
    this.checkPage = this.checkPage.bind(this);
    this.newUser = this.newUser.bind(this);
    this.existingUser = this.existingUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
    this.handleCompanies = this.handleCompanies.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    if(cookie.get('logCheck') === true){
      this.setState({
        page: "Main"
      })
    }
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
    if(cookie.get('logCheck') === undefined){
      cookie.set('logCheck', "Home")
    }

    if (this.state.page === "Home") {
      return <Home new={this.newUser} old={this.existingUser}/>;
    }
    if (this.state.page === "Signup") {
      return <SignUp logout={this.handleLogout}/>;
    }
    if (this.state.page === "Login") {
      return <Login data={this.state.db} login={this.handleLogin}/>;
    }
    if(this.state.page === "Main"){
      return <Main state={this.state} about={this.handleAbout} company={this.handleCompanies} profile={this.handleProfile} logout={this.handleLogout} user={this.state.currentUser}/>
    }
    if(this.state.page === "Profile"){
      return <Profile home={this.handleHomePage} user={this.state.currentUser}/>
    }
    if(this.state.page === "About"){
      return <About home={this.handleHomePage} user={this.state.currentUser}/>
    }
    if(this.state.page === "Companies"){
      return <List data={this.state.db} home={this.handleHomePage} fav={this.handleFavorite}/>
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
    cookie.set('logCheck', this.state.page);
    this.checkPage();
  }

  handleLogout(){
    this.setState({
      page: "Home",
      loggedIn: false,
    })
    cookie.remove('logCheck');
  }

  handleAbout(){
    this.setState({
      page:"About",
      // loggedIn: false
    })
    this.checkPage();
  }

  handleCompanies(){
    this.setState({
      page:"Companies",
      // loggedIn: false
    })
    this.checkPage();
  }

  handleHomePage(){
    this.setState({
      page:"Main",
      // loggedIn: true
    })
    this.checkPage();
  }

  handleProfile(){
    this.setState({
      page:"Profile",
      // loggedIn: false
    })
    this.checkPage();
  }

  handleFavorite(company){
    // console.log('favorite', company)
    // this.setState({
    //   favorite: this.state.favorite.concat(company)
    // })
    // console.log('favorite', this.state)
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
