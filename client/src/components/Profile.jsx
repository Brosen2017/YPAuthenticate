import React from 'react';

let Profile = props =>(
  <div>
    <h1>My Profile</h1>

    <b>Name: </b>
    {props.user.firstname} {props.user.lastname}
    <div>
      <b>Email: </b>
      {props.user.email}
    </div>
    <div>
      <b>Address: </b>
      {props.user.address}, {props.user.city}, {props.user.state}, {props.user.zipcode}
    </div>
    <div>
      <b>Company: </b>
      {props.user.company}
    </div>
    <div>
      <b>Company Website: </b>
      {props.user.website}
    </div>
    <div>
      <b></b>
      <img src={props.user.photo}></img>
    </div>
    <div>
      <b>Profile Created on: </b>
      {props.user.createdAt.slice(0,10)}
    </div>
    <div>
      <b>Last Updated: </b>
      {props.user.updatedAt.slice(0,10)}
    </div>
    <div>
      <button onClick={()=>props.home()}>Home</button>
    </div>
  </div>
)

export default Profile;