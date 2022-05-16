import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';


import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { authActions } from '../slices/auth';
import './login.scss';

import Auth from '../utils/auth';
import { render } from 'react-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentView, setCurrentView] = useState('logIn');

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        const { data } = await login({
          variables: { ...values}
        });
  
        console.log(data);
  
        const token = await data.login.token;
        dispatch(authActions.login());
        Auth.login(token);
        navigate('/profile', { replace: true });
      } catch (err) {
        console.error(err);
      }
    },
  })

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(event.target);

  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
      
      });

      console.log(data);

      const token = await data.login.token;
      dispatch(authActions.login());
      Auth.login(token);
      navigate('/profile', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const changeView = (view) => {
    setCurrentView(view);
  };

  const renderSwitch = (currentView) => {
    switch (currentView) {
      case 'signUp':
        return (
          <form onSubmit={data}>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => changeView('logIn')}>
              Have an Account?
            </button>
          </form>
        );
      case 'logIn':
        return (
          <form onSubmit={loginForm.handleSubmit}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.username}
                    placeholder="Username"
                    required
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    required
                  />
                </li>
                <li>
                  <i />
                  <p onClick={() => changeView('PWReset')}>Forgot Password?</p>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => changeView('signUp')}>
              Create an Account
            </button>
          </form>
        );
      case 'PWReset':
        return (
          <form onSubmit={handleFormSubmit}>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => changeView('logIn')}>
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };

  return <section id="entry-page">{renderSwitch(currentView)}</section>;
};

export default LoginForm;
