import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>MyRecipe</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact-Us</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;