import React from 'react';
import Companies from './Companies.jsx'
import styles from '../styles/List.css';

let List = props => (
  <div>
    <div className={styles.header}>
    <h1 className={styles.text}>Company List</h1>  
    </div>
  
  <button className={styles.button} onClick={()=>{props.condition("Main")}}>Home</button>
  <button className={styles.button} onClick={props.list}>Show All</button>
  <input className={styles.input} onKeyPress={props.enter} onChange={props.search} type="text" placeholder="Search Company"></input>
  <p>These are the current companies we have available in our database!</p>
  {props.data.map((company, index)=><Companies company={company} key={index} fav={props.fav}/>)}
  </div>
)

export default List;