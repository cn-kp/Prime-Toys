import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../../utils/auth';
import './navbar.scss';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const logOut = () => {
    closeMenu();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <nav>
        <div className="navbar">
          <div className="title-container">
            <h2 className="header-title">Prime Toys</h2>
          </div>
          <button className="btn" onClick={handleToggle}>
            {navbarOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <ul className={`nav-items ${navbarOpen ? ' showMenu' : ''}`}>
            <li>
              <NavLink to="/" activeClassName="active-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listings"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Listings
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={logOut}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navbar">
          <div className="title-container">
            <h2 className="header-title">Prime Toys</h2>
          </div>
          <button className="btn" onClick={handleToggle}>
            {navbarOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <ul className={`nav-items ${navbarOpen ? ' showMenu' : ''}`}>
            <li>
              <NavLink to="/" activeClassName="active-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listings"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Listings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
