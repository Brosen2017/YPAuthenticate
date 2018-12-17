import React from "react";
import axios from "axios";
import styles from '../styles/Login.css';

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
    console.log('data in login', data)
    axios
    .post("/check", data)
    .then(response => {
      console.log('submitted!', response.data[0])
      if(response.data.length === 0){
        return alert('incorrect username or password, please try again')
      }
      if(response.data[0].email === email){
        this.props.login(response.data[0]);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  

render(){
  return(
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}>Sign in</h1>
    <p>Please sign in below.</p>
    </div>
      <div className={styles.form}>
      <input type="text" className={styles.input} placeholder="Enter Email" name="email" required onChange={this.handleEmail}/>

      <input type="password" className={styles.input} placeholder="Enter Password" name="password" required onChange={this.handlePWD}/>
      </div>
      <div>
      <button className={styles.button} onClick={()=>{this.handleSubmit()}}>Sign in</button>
      <button className={styles.button} onClick={()=>this.props.logout()}>Cancel</button>
      </div>
  </div>
  )
}
}


export default Login;