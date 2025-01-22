import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/image.png'; // Update path as needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          {/* Logo and Project Name as Link */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-img" />
            <div className="logo">CV Revive</div>
          </Link>
        </div>
        
        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/examples" className="nav-link">Example Resumes</Link>
          <Link to="/story" className="nav-link">Our Story</Link>

          <Link to="/signin" className="nav-btn"> Sign In </Link>
          <Link to="/register" className="nav-btn"> Register </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
