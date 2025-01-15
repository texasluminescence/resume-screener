import React from 'react';
import './Footer.css'; // Make sure this file is in the same folder as Footer.js

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li>
              <a href="/examples" className="footer-link">
                Example Resumes
              </a>
            </li>
            <li>
              <a href="/story" className="footer-link">
                Our Story
              </a>
            </li>
            <li>
              <a
                href="https://github.com/texasluminescence/resume-screener"
                className="footer-link"
              >
                GitHub Repo
              </a>
            </li>
            <li>
              <a
                href="https://texasluminescence.org/ai-resume-screener/"
                className="footer-link"
              >
                AI Resume Screener
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p>&copy; 2025 CV Revive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
