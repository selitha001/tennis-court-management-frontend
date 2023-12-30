import React from "react";
import "../src/css/login.css";

function Login() {
  return (
    <div className="login">
      {/* <div className="overlap-group-wrapper"> */}
        <div className="box-container">
          <div className="header-title">
            <h1>
              Welcome <span>Back</span>
            </h1>
            <p>Sign in with your email and password</p>
          </div>

          <div className="input-fields-wrapper">
            <div className="input-box-wrapper">
              <p className="input-label">Email Address</p>
              <input id="email" type="email" className="input-field" />
            </div>
            <div className="input-box-wrapper">
              <p  className="input-label">Password</p>
              <input id="password" type="password" className="input-field" />
            </div>
          </div>

          <div className="input-fields-under">
            <div className="remeber-me">
              <input
                type="checkbox"
                name="remember-me"
                className="remeber-me-checkbox"
                id="login-remember-checkbox"
              />
              <label
                aria-labelledby="login-remember-checkbox"
                htmlFor="login-remember-checkbox"
                className="login-checkbox-label"
              >
                Remember Me
              </label>
            </div>
            <div className="reset-password">
               <p>Reset Password</p>
            </div>
          </div>

          <button
            id="login-submit"
            className="button"
          >
            SIGN IN
          </button>


          {/* <div>
            <div className="header-title">
                <h1>Welcome <span>Back</span></h1>
                 <p>Sign in with your email and password</p>
            </div>

            <div className="input-field-wrapper">
                <div className="input-box-wrapper">
                     <p>Email</p>
                     <input></input>
                </div>
            </div>
            </div> */}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Login;
