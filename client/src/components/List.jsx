import React from 'react';
import Companies from './Companies.jsx'

let List = props => (
  <div>
  <h1>Company List</h1>
  {props.data.map((company, index)=><Companies company={company} key={index}/>)}
  </div>
)

export default List;