import React from "react";
import styles from '../styles/Home.css';

let Home = props => (
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}><span className={styles.yp}>YP</span>TakeHomeProject.com</h1>
    </div>
    <div>
    <div className={styles.buttonBox}>
    <button className={styles.button} onClick={()=>{props.condition("Login")}}>Login</button>  
    <button className={styles.button} onClick={()=>{props.condition("Signup")}}>Signup</button>  
    </div>
    </div>
  </div>
);

export default Home;
