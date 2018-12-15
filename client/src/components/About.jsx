import React from "react";
import axios from 'axios';
import StateList from "./StateList.jsx";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      company: "",
      website:"",
      photo:"",
      address: "",
      city: "",
      state: "",
    };
    this.handleCompany = this.handleCompany.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity= this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handleState(e){
    this.setState({
      state: e.target.value
    })
  }

  handleCity(e){
    this.setState({
      city: e.target.value
    })
  }

  handleAddress(e){
    this.setState({
      address: e.target.value
    })
  }

  handleCompany(e){
    this.setState({
      company: e.target.value
    })
  }

  handleWebsite(e){
    this.setState({
      website: e.target.value
    })
  }

  handlePhoto(e){
    this.setState({
      photo: e.target.value
    })
  }

  handleSubmit(){
    console.log('About state', this.state)
    let data = this.state
    axios
    .patch('update', data)
    .then((res)=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <form>
        <div>
          <h1>Tell us a little more about yourself</h1>
          <hr />

          <b>Company Name</b>
          <input type="text" placeholder="Company Name" required onChange={this.handleCompany}/>

          <b>Company Website</b>
          <input type="text" placeholder="Company Website" required onChange={this.handleWebsite}/>

          <b>Photo</b>
          <input type="text" placeholder="Insert imageUrl here" required onChange={this.handlePhoto}/>

          <b>Address</b>
          <input type="text" placeholder="Address" required onChange={this.handleAddress}/>

          <b>City</b>
          <input type="text" placeholder="City" required onChange={this.handleCity}/>

          <b>State</b>
          <StateList handle={this.handleState}/>
        </div>
        <div>
          <button onClick={()=>{this.handleSubmit()}}>Submit</button>
          <button 
            onClick={() => {
              this.props.home();
            }}
          >
            Home
          </button>
        </div>
      </form>
    );
  }
}

export default About;
