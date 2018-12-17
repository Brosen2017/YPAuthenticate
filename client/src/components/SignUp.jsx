import React from "react";
import axios from 'axios';
import styles from '../styles/SignUp.css';


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
    <div>
    <div>
  <form >
    <div>
      <div className={styles.header}>
      <h1 className={styles.title}>Sign Up</h1>
      <p className={styles.subHeader}>Please fill out the form below to create an account.</p>
      </div>
      <hr />
      <div className={styles.form}>
      <div className={styles.nameInput}>
      <input type="text" placeholder="First Name" name="firstname" required onChange={this.handleFName} className={styles.name} id={styles.firstName}/>

      <input type="text" placeholder="Last Name" name="lastname" required onChange={this.handleLName} className={styles.name} id={styles.lastName}/>
      </div>
      <div className={styles.formInputs}>
      <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleEmail} className={styles.input}/>
      </div>
      <div className={styles.formInputs}>
      <input type="password" placeholder="Enter Password" name="psw" required onChange={this.handlePWD} className={styles.input}/>
      </div>
      <div className={styles.formInputs}>
      <input
        type="password"
        placeholder="Retype Password"
        name="psw-repeat"
        required
        onChange={this.handlePWDCheck} className={styles.input}/>
      </div>
      <div className={styles.formInputs}>
      <input type="text" placeholder="Enter Zipcode" name="zipcode" required onChange={this.handleZip} className={styles.input}/>
      </div>
      <p className={styles.disclaimer}>
        By creating an account you agree to our {" "}
        <a href="#" >
          Terms & Services
        </a>
        .
      </p>

      <div className={styles.buttonBox}>
        <button type="button" className={styles.button} id={styles.cancel} onClick={()=>this.props.logout()}>Cancel</button>
        <button type="submit" className={styles.button} id={styles.signUp} onClick={this.handleSubmit}>Sign Up</button>
      </div>
      </div>
    </div>
  </form>
  </div>
  </div>
);
}
}


export default SignUp;
