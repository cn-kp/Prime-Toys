import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { authActions } from '../slices/auth';
import './login.scss';

import Auth from '../utils/auth';
import { render } from 'react-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [currentView, setCurrentView] = useState('logIn');

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(event.target);

    setFormState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
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
          <form onSubmit={handleFormSubmit}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
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
