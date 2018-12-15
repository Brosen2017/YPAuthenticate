import React from "react";

let Login = props =>(
  <form>
    <h1>Sign in</h1>
    <p>Please sign in below.</p>
    <hr/>

          <label>
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label>
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="password" required />
      <div>
      <button type="submit">Sign in</button>
      </div>
  </form>
)

export default Login;