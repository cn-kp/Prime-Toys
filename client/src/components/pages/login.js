import React, { useState, useEffect } from 'react';
import "./login.scss";

export default function LoginForm() {
  const [activePanel, setActivePanel] = useState(false)
  // const [hidePassword,setHidePassword] = useState("password")

    return(
    <div id="container" className={activePanel ? "right-panel-active" : ""}>
      <div className="form_container sign_in">
        <form action="" method="POST">
          <h1 className="beige_text">Log In To Your Account</h1>

          <div className="social_icons">
            <p className="login-options">Or login with Facebook or Google</p>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
          <h6 className="beige_text">Or enter your login details</h6>
          <div className="email icon">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              defaultValue=""
              required
            /><i className="fa-solid fa-envelope"></i>
          </div>
          <div className="password icon">
            <input
              type="password"
              id="password_up"
              name="password"
              placeholder="Password"
              defaultValue=""
              required
            />
            <i className="fa-solid fa-lock"></i>
            <i className="show fas fa-eye-slash"></i>
          </div>
          <div className="remember beige_text">
            <input type="checkbox" id="remember"/>
            <h5>Remember me</h5>
          </div>
          <div className="submit">
            <button
              id="login-option_btn"
              type="submit"
              className="overlay_button"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="form_container sign_up">
        <form action="" method="POST">
          <h1 className="beige_text">Create an Account</h1>
          <div className="social_icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-google"></i></a>
          </div>
          <h6 className="beige_text">Or enter your personal details</h6>
          <div className="user icon">
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Username"
              required
            /><i className="fa-solid fa-user"></i>
          </div>
          <div className="email icon">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              required
            /><i className="fa-solid fa-envelope"></i>
          </div>
          <div className="password icon">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            /><i className="fa-solid fa-lock"></i
            ><i className="show fas fa-eye-slash"></i>
          </div>
          <div className="submit">
            <button
              id="btnin"
              name="signup"
              type="submit"
              className="overlay_button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="overlay_container">
        <div className="overlay">
          <div className="overlay_panel overlay_left">
            <h1>Welcome Back!</h1>
            <p>Please login to your Prime Toys Account to access our website</p>
            <button id="signIn" type="button" className="overlay_button" onClick={()=>(setActivePanel(!activePanel))}>
              Log In
            </button>
          </div>
          <div className="overlay_panel overlay_right">
            <h1>Don't Have an Account?</h1>
            <p>Click Sign Up to create a new Prime Toys account</p>
            <button id="signUp" type="button" className="overlay_button" onClick={()=>(setActivePanel(!activePanel))}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};
