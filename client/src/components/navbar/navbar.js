import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="title-container">
          <h2 className="header-title">Prime Toys</h2>
        </div>
        <ul className="nav--items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
