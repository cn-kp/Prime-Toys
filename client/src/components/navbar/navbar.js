import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";


export default function Navbar(){
    return(

            <nav>
                <ul className="navbar">
                <div className="title-container">
                    <h1 className="title">Prime Toys</h1>
                </div>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/profile">Profile</Link></li>
                    <li><Link to ="/listings">Listings</Link></li>
                    <li><Link to ="/login">Login</Link></li>
                </ul>
            </nav>

    )
}