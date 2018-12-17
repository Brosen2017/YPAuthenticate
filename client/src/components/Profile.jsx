import React from 'react';
import styles from '../styles/Profile.css';

let Profile = props =>(
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}>My Profile</h1>
    </div>

<div className={styles.info}>
    <div>
    <b className={styles.keys}>Name: </b>
    <span className={styles.value}>
    {props.user.firstname} {props.user.lastname}
    </span>
    </div>
    <div>
      <b className={styles.keys}>Email: </b>
      <span className={styles.value}>
      {props.user.email}
      </span>
    </div>
    <div>
      <b className={styles.keys}>Address: </b>
      <span className={styles.value}>
      {props.user.address}, {props.user.city}, {props.user.state}, {props.user.zipcode}
    </span>
    </div>
    <div>
      <b className={styles.keys}>Company: </b>
      <span className={styles.value}>
      {props.user.company}
      </span>
    </div>
    <div>
      <b className={styles.keys}>Company Website: </b>
      <span className={styles.value}>
      {props.user.website}
      </span>
    </div>
    <div>
      <b></b>
      <img className={styles.photo} src={props.user.photo}></img>
    </div>
    <div>
      <b className={styles.keys}>Profile Created on: </b>
      <span className={styles.value}>
      {props.user.createdAt.slice(0,10)}
      </span>
    </div>
    <div>
      <b className={styles.keys}>Last Updated: </b>
      <span className={styles.value}>
      {props.user.updatedAt.slice(0,10)}
      </span>
    </div>
    <div>
      <button className={styles.button} onClick={()=>props.home()}>Home</button>
    </div>
    </div>
  </div>
)

export default Profile;