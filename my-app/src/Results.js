// Results.js
import React from 'react';
import './css_files/Results.css'; // Additional styles for the Results page
import { Link } from 'react-router-dom';

const Results = () => {
  return (
    <div className="columnheader_logo-one">
      {/* Header Section */}
      <header className="header">
        <div className="header_top-row">
          <div className="header__logo">
            {/* Put logo once we have one*/}
            <img src="path_to_logo.png" alt="Logo" className="header__logo" />
          </div>
          <div className="header__navigation">
            <ul className="header__menu">
              <li><Link to="/" className="menu-item-resume-link"><p className="header__menu-item">Resume Scanner</p></Link></li>
              <li><Link to="/examples"><p className="header__menu-item">Example Resumes</p></Link></li>
              <li><Link to="/community"><p className="header__menu-item">Community</p></Link></li>
              <li><Link to="/blogs"><p className="header__menu-item">Blogs</p></Link></li>
              <li><Link to="/tips"><p className="header__menu-item">Tips</p></Link></li>
              <li><Link to="/contact"><p className="header__menu-item">Contact</p></Link></li>
              <li><button className="header__auth-button">Sign in</button></li>
              <li><button className="header__auth-button-1">Register</button></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Results Content */}
      <div className="results-content">
        <div className="heroactions2">
          <h1 className="resume-scanner__title">Results</h1>
          <p className="results-score">Score: 85/100</p>
        </div>

        <div className="strengths-section">
          <h2 className="section-title">Strengths</h2>
          <ul className="strengths-list">
            <li>Clear Contact Information (10/10): Comprehensive, easy to find.</li>
            <li>Relevant Education (9/10): Good clarity on degree, courses, and GPA.</li>
            <li>Technical Skills (8/10): Organized and relevant, though terms like "Exposed to" could be stronger.</li>
            <li>Quantified Experience (18/20): Uses specific actions and metrics, though more quantifiable impact would strengthen some points.</li>
            <li>Projects (8/10): Good variety, but outcomes could be more detailed.</li>
            <li>Leadership (9/10): Clear responsibilities; additional metrics would add impact.</li>
            <li>Professional Formatting (10/10): Clean, readable, and visually appealing.</li>
          </ul>
        </div>

        <div className="improvements-section">
          <h2 className="section-title">Areas for Improvement</h2>
          <ul className="improvements-list">
            <li>Add Metrics: Some achievements lack quantifiable results.</li>
            <li>Refine Skills Section: Focus on proficient skills and clarify levels.</li>
            <li>Project Outcomes: Emphasize results of personal projects.</li>
            <li>Use Stronger Language: Replace "exposed to" with confident terms.</li>
          </ul>
        </div>

        <p className="results-summary">
          A solid resume overall with room for minor improvements in metrics and wording.
        </p>

        <div className="resume-preview">
          {/* Convert pdf to image and put below*/}
          <img src="path_to_resume_image.png" alt="Resume Preview" className="resume-image"/>
        </div>
      </div>
    </div>
  );
};

export default Results;
