import React from "react";

let Home = props => (
  <div>
    <h1>Login/Signup</h1>
    <button onClick={()=>{props.old()}}>Login</button>
    <button onClick={() => {props.new()}}>Signup</button>
  </div>
);

export default Home;
