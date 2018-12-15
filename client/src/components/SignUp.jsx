import React from "react";
import axios from 'axios';


class SignUp extends React.Component{
  constructor(props){
    super(props)
  this.state={
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    rePassword:'',
    zipcode:''
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleFName = this.handleFName.bind(this)
  this.handleLName = this.handleLName.bind(this)
  this.handleEmail = this.handleEmail.bind(this)
  this.handlePWD = this.handlePWD.bind(this)
  this.handlePWDCheck = this.handlePWDCheck.bind(this)
  this.handleZip = this.handleZip.bind(this)
  }

  handleFName(e){
    this.setState({
      firstName: e.target.value
    })
  }

  handleLName(e){
    this.setState({
      lastName: e.target.value
    })
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

  handlePWDCheck(e){
    this.setState({
      rePassword: e.target.value
    })
  }

  handleZip(e){
    this.setState({
      zipcode: e.target.value
    })
  }

  handleSubmit(e){
    let user = this.state
     console.log(this.state)
    if(this.state.password !== this.state.rePassword){
      alert("Password is not the same!")
    }
    axios
    .post('/user', {user})
    .then((response)=>{
      console.log('successfully sent', response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

render(){
  return (
  <form>
    <div>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label htmlFor="firstname">
        <b>First name</b>
      </label>
      <input type="text" placeholder="First Name" name="firstname" required onChange={this.handleFName}/>

      <label htmlFor="lastname">
        <b>Last name</b>
      </label>
      <input type="text" placeholder="Last Name" name="lastname" required onChange={this.handleLName}/>

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleEmail}/>

      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required onChange={this.handlePWD}/>

      <label htmlFor="psw-repeat">
        <b>Password Confirmation</b>
      </label>
      <input
        type="password"
        placeholder="Retype Password"
        name="psw-repeat"
        required
        onChange={this.handlePWDCheck}/>

      <label htmlFor="zipcode">
        <b>Zipcode</b>
      </label>
      <input type="text" placeholder="Enter Zipcode" name="zipcode" required onChange={this.handleZip}/>

      <p>
        By creating an account you agree to our{" "}
        <a href="#" >
          Terms & Privacy
        </a>
        .
      </p>

      <div>
        <button type="button" onClick={()=>this.props.logout()}>Cancel</button>
        <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
      </div>
    </div>
  </form>
);
}
}


export default SignUp;
