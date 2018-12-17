import React from "react";
import styles from '../styles/Home.css';

let Home = props => (
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}>YPTakeHomeProject.com</h1>
    </div>
    <p>
    <button onClick={()=>{props.old()}}>Login</button>  
    <button onClick={() => {props.new()}}>Signup</button>  
    </p>
    
  </div>
);

export default Home;
