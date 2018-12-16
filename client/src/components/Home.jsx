import React from "react";
import styles from '../styles/Home.css';

let Home = props => (
  <div>
    <h1 className={styles.header}>Login/Signup</h1>
    <p>
    <button onClick={()=>{props.old()}}>Login</button>  
    <button onClick={() => {props.new()}}>Signup</button>  
    </p>
    
  </div>
);

export default Home;
