import React from 'react';
import StateList from './StateList.jsx';

let About = props =>(
  <form>
    <div>
      <h1>Tell us a bit more about yourself</h1>
      <hr/>

      <b>Company Name</b>
      <input type="text" placeholder="Company Name" required></input>

      <b>Address</b>
      <input type="text" placeholder="Address" required></input>

      <b>City</b>
      <input type="text" placeholder="City" required></input>

      <b>State</b>
      <StateList />
    </div>
  </form>
)

export default About;