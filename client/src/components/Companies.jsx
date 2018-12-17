import React from 'react';
import styles from '../styles/Companies.css';

let Companies = props =>(
  <ul>
    <div className={styles.form}>
      <b className={styles.keys}>Name: </b>
      <span className={styles.value}>
      {props.company.firstname} {props.company.lastname}
      </span>
      
        <div>
        <b className={styles.keys}>Company: </b>
        <span className={styles.value}>
        {props.company.company}
        </span>
        </div>
        
        <b className={styles.keys}>Company Website: </b>
        <span className={styles.value}>
        {props.company.website}
        </span>

        <div>
          <img className={styles.photo} src={props.company.photo}></img>
        </div>
        {/* <div>
        <button className={styles.button} onClick={()=>props.fav(props.company)}>Favorite</button>
        </div> */}
      </div>
    
  </ul>
)

export default Companies;