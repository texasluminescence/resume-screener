import React from 'react';
import logo from './images/image.png';
import './css_files/Results.css'; // Additional styles for the Results page
import { Link } from 'react-router-dom';
import MatrixRubric from "./MatrixRubric.js";
import Navbar from './components/Navbar.js'; // Import the Navbar component
import Footer from './components/Footer.js'; // Import the Footer component

const Results = () => {

  const initialSelections = {
    formatAndStyle: "Good",
    experience: "Fair",
    skills: "Good",
    education: "Excellent"
  };

  return (
    <div className="columnheader_logo-one">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <div className="results-content">
        <MatrixRubric initialSelections={initialSelections}/>
        {/* Resume preview */}
        <div className="resume-preview">
          <img src="path_to_resume_image.png" alt="Resume Preview" className="resume-image"/>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Results;
