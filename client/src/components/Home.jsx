import React from "react";
import styles from '../styles/Home.css';

let Home = props => (
  <div className={styles.header}>
    <h1>Login/Signup</h1>
    <button onClick={()=>{props.old()}}>Login</button>
    <button onClick={() => {props.new()}}>Signup</button>
  </div>
);

export default Home;
