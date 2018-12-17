import React from "react";
import axios from "axios";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import Additional from "./Additional.jsx";
import List from "./List.jsx";
import Profile from "./Profile.jsx";
import Update from './Update.jsx';
import cookie from "js-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: cookie.get("pageCheck") || "Home",
      db: [],
      loggedIn: cookie.get("logCheck") || false,
      currentUser: (() => {
        if (cookie.get("user")) {
          return JSON.parse(cookie.get("user"));
        } else {
          return cookie.get("user");
        }})(),
      search:''
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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleList = this.handleList.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.checkPage();
    axios
      .get("/user")
      .then(response => {
        this.setState({
          db: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkPage() {
    if (cookie.get("pageCheck") === undefined) {
      cookie.set("pageCheck", "Home");
    }
    if (cookie.get("logCheck") === false) {
      cookie.set("user", {});
    }
    if (cookie.get("logCheck") === true) {
      this.handleLogin();
    }
    if (this.state.page === "Home") {
      return <Home new={this.newUser} old={this.existingUser} />;
    }
    if (this.state.page === "Signup") {
      return <SignUp logout={this.handleLogout} />;
    }
    if (this.state.page === "Login") {
      return <Login data={this.state.db} login={this.handleLogin} logout={this.handleLogout}/>;
    }
    if (this.state.page === "Main") {
      return <Main state={this.state} about={this.handleAbout} company={this.handleCompanies} profile={this.handleProfile} logout={this.handleLogout} />
    }
    if (this.state.page === "Profile") {
      return <Profile home={this.handleHomePage} update={this.handleUpdate} user={this.state.currentUser} />
    }
    if (this.state.page === "About") {
      return <Additional home={this.handleHomePage} user={this.state.currentUser} login={this.handleLogin}/>;
    }
    if (this.state.page === "Companies") {
      return <List search={this.handleSearch} enter={this.handleEnter} list={this.handleList} data={this.state.db} home={this.handleHomePage} fav={this.handleFavorite}/>
    }
    if(this.state.page === "Update"){
      return <Update user={this.state.currentUser} login={this.handleLogin} cancel={this.handleHomePage}/>
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

  handleLogin(user) {
    this.setState({
      page: "Main",
      loggedIn: true,
      currentUser: user
    });
    cookie.set("pageCheck", this.state.page);
    cookie.set("user", this.state.currentUser);
    cookie.set("logCheck", this.state.loggedIn);
    this.checkPage();
  }

  handleLogout() {
    this.setState({
      page: "Home",
      loggedIn: false
    });
    cookie.remove("pageCheck");
    cookie.remove("user");
    cookie.remove("logCheck");
  }

  handleAbout() {
    this.setState({
      page: "About"
    });
    this.checkPage();
  }

  handleCompanies() {
    this.setState({
      page: "Companies"
    });
    this.checkPage();
  }

  handleHomePage() {
    this.setState({
      page: "Main"
    });
    this.checkPage();
  }

  handleProfile() {
    this.setState({
      page: "Profile"
    });
    this.checkPage();
  }

  handleList(){
    axios
    .get('/user')
    .then((res)=>{
      this.setState({
        db: res.data
      })
    })
    .catch(err=>console.log(err))
  }

  handleSearch(e){
    this.setState({
      search: e.target.value
    });
  }

  handleEnter(e){
    if(e.key === 'Enter'){
      let company = this.state.search;
      axios
      .get('/update', {params:{company}})
      .then((res)=>{
        this.setState({
          db: res.data
        })
      })
      .catch(err=>console.log(err))
    }
  }

  handleUpdate(){
    this.setState({
      page: "Update"
    })
    this.checkPage();
  }

  handleFavorite(company) {
    //Due to time constraints I was unable to add this extra feature
    //This would allow the user to click on individual companies and favorite them
    //Upon favoriting them, I would update the user database to include their favorite companies 
    //You would be able to view favorite companies in User Profile.
  }

  render() {
    return <div>{this.checkPage()}</div>;
  }
}

export default App;
