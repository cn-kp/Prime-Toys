import React from 'react';
import "./login.scss";


export default function Login(){
    return(
        <div id="container">
      <div class="form_container sign_in">
        <form action="" method="POST">
          <h1 class="beige_text">Log In To Your Account</h1>

          <div class="social_icons">
            <p class="login-options">Or login with Facebook or Google</p>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-google"></i>
            </a>
          </div>
          <h6 class="beige_text">Or enter your login details</h6>
          <div class="email icon">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              value=""
              required
            /><i class="fa-solid fa-envelope"></i>
          </div>
          <div class="password icon">
            <input
              type="password"
              id="password_up"
              name="password"
              placeholder="Password"
              value=""
              required
            />
            <i class="fa-solid fa-lock"></i>
            <i class="show fas fa-eye-slash" onclick="showPassword()"></i>
          </div>
          <div class="remember beige_text">
            <input type="checkbox" id="remember"/>
            <h5>Remember me</h5>
          </div>
          <div class="submit">
            <button
              id="login-option_btn"
              type="submit"
              class="overlay_button"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div class="form_container sign_up">
        <form action="" method="POST">
          <h1 class="beige_text">Create an Account</h1>
          <div class="social_icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-google"></i></a>
          </div>
          <h6 class="beige_text">Or enter your personal details</h6>
          <div class="user icon">
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Username"
              required
            /><i class="fa-solid fa-user"></i>
          </div>
          <div class="email icon">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              required
            /><i class="fa-solid fa-envelope"></i>
          </div>
          <div class="password icon">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            /><i class="fa-solid fa-lock"></i
            ><i class="show fas fa-eye-slash" onclick="showPassword()"></i>
          </div>
          <div class="submit">
            <button
              id="btnin"
              name="signup"
              type="submit"
              class="overlay_button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div class="overlay_container">
        <div class="overlay">
          <div class="overlay_panel overlay_left">
            <h1>Welcome Back!</h1>
            <p>Please login to your Prime Toys Account to access our website</p>
            <button id="signIn" type="button" class="overlay_button">
              Log In
            </button>
          </div>
          <div class="overlay_panel overlay_right">
            <h1>Don't Have an Account?</h1>
            <p>Click Sign Up to create a new Prime Toys account</p>
            <button id="signUp" type="button" class="overlay_button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}
