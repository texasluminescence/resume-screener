import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import './Navbar.css';
import logo from '../images/image.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          {/* Logo and Project Name as Link */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-img"/>
            <div className="logo">CV Revive</div>
          </Link>
        </div>
        
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/examples" className="nav-link">Example Resumes</Link>
          <Link to="/story" className="nav-link">Our Story</Link>
          {user ? (
            <button 
              onClick={signOut}
              style={{
                padding: '8px 16px',
                backgroundColor: '#000000',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Sign Out
            </button>
          ) : (
            <button 
              onClick={() => navigate('/signin')}
              className="nav-btn"
              style={{
                padding: '8px 16px',
                backgroundColor: '#000000',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
