import React from "react";
import styles from '../styles/Home.css';

let Home = props => (
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}><span className={styles.yp}>YP</span>TakeHomeProject.com</h1>
    </div>
    <div>
    <p>
    <button className={styles.button} onClick={()=>{props.old()}}>Login</button>  
    <button className={styles.button} onClick={() => {props.new()}}>Signup</button>  
    </p>
    </div>
  </div>
);

export default Home;
