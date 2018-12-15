import React from 'react';

let Companies = props =>(
  <ul>
    <li>
      <b>Name: </b>
      {props.company.firstname} {props.company.lastname}
      <div>
        <p>
        <b>Company: </b>
        {props.company.company}
        </p>
        
        <b>Company Website: </b>
        {props.company.website}

        <button onClick={()=>props.fav(props.company)}>Favorite</button>

        <div>
          <img src={props.company.photo}></img>
        </div>
      </div>
    </li>
  </ul>
)

export default Companies;