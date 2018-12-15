import React from "react";
import axios from "axios";

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePWD = this.handlePWD.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })

  }

  handlePWD(e){
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(){
    let data = this.state;
    let email = this.state.email;
    let password = this.state.password;
    axios
    .post("/check", data)
    .then(response => {
      if(response.data.length === 0){
        alert('incorrect username or password, please try again')
      }
      if(response.data[0].email === email && response.data[0].password === password){
        this.props.login(response.data[0]);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  

render(){
  return(

  <form>
    <h1>Sign in</h1>
    <p>Please sign in below.</p>
    <hr/>

          <label>
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleEmail}/>
      <label>
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="password" required onChange={this.handlePWD}/>
      <div>
      <button type="button" onClick={()=>{this.handleSubmit()}}>Sign in</button>
      </div>
  </form>
  )
}
}


export default Login;