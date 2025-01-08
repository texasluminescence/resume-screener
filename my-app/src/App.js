import logo from './images/image.png';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react'; 
import './css_files/AfterEnteringResume.css';
import './css_files/components.css';
import './css_files/font.css';
import './css_files/index.css';
import './css_files/styles.css';
import Results from './Results'; // Import the Results component
import * as ReactBootStrap from 'react-bootstrap'; 
import React from 'react';

function App() {
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const handleUploadClick = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData(); 
    formData.append('file', file); 
    setLoading(true); 
    try {
      
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server response:', data);
      setLoading(false);
      navigate("/results");
      
    } catch (error) {
      console.error('Upload error:', error);
    }



  };

  return (
    <div className="columnheader_logo-one">
      <header className="header">
        <div className="header_top-row">
          <div className="header__navigation">
            <ul className = "header__menu">
            <li>
                <Link to="/" className="menu-item-resume-link">
                <img 
                  src={logo} 
                  alt="Resume Scanner Logo" 
                  className="header__logo"
                />
                </Link>
            </li>
            <div className="header__menu-items">
              <li><Link to="/examples"><p className="ui text size-textxs">Example Resumes</p></Link></li>
              <li><Link to="/tips"><p className="ui text size-textxs">Tips</p></Link></li>
              <li><button className="header____auth-button ui button gray_300 size-xs fill round">Sign in</button></li>
              <li><button className="header____auth-button-1 ui button blue_gray_900 size-xs fill round">Register</button></li>
            </div>
            </ul>
          </div>
        </div>
      </header>

      <div>
        <div className="flex-col-center-center heroactions">
          {loading && (<div className = "loading-overlay"><ReactBootStrap.Spinner animation="border"/></div>)}
          <h1 className="resume-scanner_title ui heading size-headingxs">Resume Scanner</h1>
          <label className="button--upload ui button blue_gray_900 size-sm fill round">
            <input type="file"  className= "hide-input" onChange = {handleUploadClick} ></input>
            Upload your Resume Here 
          </label>
        </div>
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/results" element={<Results />} /> 
    </Routes>
  );
}
