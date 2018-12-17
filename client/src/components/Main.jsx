import React from 'react';
import styles from '../styles/Main.css';

let Main = props =>(
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}>Welcome to the main page!</h1>
    </div>
    <div>
    <button className={styles.button} onClick={()=>{props.about()}}>Additional Info</button>
    <button className={styles.button} onClick={()=>{props.profile()}}>My Profile</button>
    <button className={styles.button} onClick={()=>{props.company()}}>Companies</button>
    <button className={styles.button} onClick={()=>props.logout()}>Log out</button>
    </div>
  </div>
)

export default Main;