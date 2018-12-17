import React from 'react';
import styles from '../styles/Update.css';
import axios from 'axios';

class Update extends React.Component{
  constructor(props){
      super(props);
      this.state={
          user: this.props.user,
          oldPWD:'',
          newPWD:'',
          rePWD:'',
      }
      this.handlePWD = this.handlePWD.bind(this);
      this.handleNewPWD = this.handleNewPWD.bind(this);
      this.handleRePWD = this.handleRePWD.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePWD(e){
    this.setState({
        oldPWD: e.target.value
    })
  }

  handleNewPWD(e){
    this.setState({
        newPWD: e.target.value
    })
  }

  handleRePWD(e){
    this.setState({
        rePWD: e.target.value
    })
  }

  handleSubmit(){
      console.log('update', this.state)
      let data = this.state
      if(this.state.newPWD !== this.state.rePWD){
          alert('Warning password does not match, please try again')
      }
      axios
      .patch('/pwd', data)
      .then((res)=>{
          console.log(res)
          axios
          .get('/check' , {params:{data}})
          .then((response)=>{
            console.log('in additional', response.data[0])
            this.props.login(response.data[0])
          })
          .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err))
  }

  render(){
      return(
        <div>
            <div className={styles.header}>
            <h1 className={styles.text}>Change Password</h1>
            </div>
            <div className={styles.form}>
            <input onChange={this.handlePWD} type="password" placeholder="Enter Old Password"></input>
            <input onChange={this.handleNewPWD} type="password" placeholder="Enter New Password"></input>
            <input onChange={this.handleRePWD} type="password" placeholder="Enter Password Again"></input>
            </div>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      )
  }
}

export default Update;