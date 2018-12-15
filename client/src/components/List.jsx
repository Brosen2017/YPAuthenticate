import React from 'react';
import Companies from './Companies.jsx'

let List = props => (
  <div>
  <h1>Company List</h1>
  <button onClick={()=>{props.home()}}>Home</button>
  <p>These are the current companies we have available in our database!</p>
  {props.data.map((company, index)=><Companies company={company} key={index} fav={props.fav}/>)}
  </div>
)

export default List;