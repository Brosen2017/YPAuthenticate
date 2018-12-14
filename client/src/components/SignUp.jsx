import React from "react";

let SignUp = props => (
  <form>
    <div>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label htmlFor="firstname">
        <b>First name</b>
      </label>
      <input type="text" placeholder="First Name" name="firstname" required />

      <label htmlFor="lastname">
        <b>Last name</b>
      </label>
      <input type="text" placeholder="Last Name" name="lastname" required />

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <label htmlFor="psw-repeat">
        <b>Password Confirmation</b>
      </label>
      <input
        type="password"
        placeholder="Retype Password"
        name="psw-repeat"
        required
      />

      <label htmlFor="zipcode">
        <b>Zipcode</b>
      </label>
      <input type="text" placeholder="Enter Zipcode" name="zipcode" required />

      {/* <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom:15px"
        >
          {" "}
          Remember me
        </input>
      </label> */}

      <p>
        By creating an account you agree to our{" "}
        <a href="#" >
          Terms & Privacy
        </a>
        .
      </p>

      <div>
        <button type="button">Cancel</button>
        <button type="submit">Sign Up</button>
      </div>
    </div>
  </form>
);

export default SignUp;
