import React from 'react';

let Main = props =>(
  <div>
    <h1>Welcome to the main page!</h1>

    <button onClick={()=>{props.about()}}>About Me</button>
    <button>Change Existing Info</button>
    <button onClick={()=>{props.company()}}>Business</button>
  </div>
)

export default Main;