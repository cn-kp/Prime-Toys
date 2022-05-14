import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="title-container">
          <h2 className="header-title">Prime Toys</h2>
        </div>
        <button className="btn" onClick={handleToggle}>
          {navbarOpen ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
        <ul className={`nav-items ${navbarOpen ? ' showMenu' : ''}`}>
          <li>
            <Link to="/" activeClassName="active-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/listings"
              activeClassName="active-link"
              onClick={closeMenu}
            >
              Listings
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
