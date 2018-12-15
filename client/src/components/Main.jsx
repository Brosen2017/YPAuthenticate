import React from 'react';

let Main = props =>(
  <div>
    {console.log('in main', props.user)}
    <h1>Welcome to the main page!</h1>

    <button onClick={()=>{props.about()}}>Additional Info</button>
    <button>About me</button>
    <button onClick={()=>{props.company()}}>Business</button>
  </div>
)

export default Main;