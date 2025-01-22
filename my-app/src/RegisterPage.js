import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './css_files/RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic check to ensure passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // TODO: send (email, password) to your backend register endpoint
    // e.g.,
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    //   });
    //   const data = await response.json();
  };

  return (
    <div>
      <Navbar />

      <div className="register-wrapper">
        <h1 className="register-title">Register</h1>

        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="email" className="register-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="register-label">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword" className="register-label">
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="register-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default RegisterPage;
