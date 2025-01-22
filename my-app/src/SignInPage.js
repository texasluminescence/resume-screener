import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './css_files/SignInPage.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: send email/password to your backend for verification
  };

  return (
    <div>
      <Navbar />

      {/* Centered area for the sign-in form */}
      <div className="signin-wrapper">
        <h1 className="signin-title">Sign In</h1>

        <form onSubmit={handleSubmit} className="signin-form">
          <label htmlFor="email" className="signin-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="signin-label">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
