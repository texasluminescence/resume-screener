import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './css_files/AfterEnteringResume.css';
import './css_files/components.css';
import './css_files/font.css';
import './css_files/index.css';
import './css_files/styles.css';
import logo from './images/image.png';
import Results from './Results';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Spinner from 'react-bootstrap/Spinner';

const buttonStyle = {
  backgroundColor: '#FFF',
  color: '#000',
  border: '1px solid #000',
  padding: '8px 16px',
  cursor: 'pointer',
  borderRadius: '6px',
  transition: 'background-color 0.3s, color 0.3s',
  marginLeft: '10px',
};

const buttonHoverStyle = {
  backgroundColor: '#000',
  color: '#FFF',
};

function DragDropResume({ loading, handleUploadClick }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleUploadClick({ target: { files } });
    }
  };

  return (
    <div className="drag-drop-wrapper" style={{ textAlign: 'center', padding: '40px'}}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2C3E50' }}>Welcome to CV Revive</h1>
      <p style={{ fontSize: '18px', color: '#34495E' }}>Optimize your resume with AI-powered tools and land your dream job!</p>
      <div
        className={`drag-drop-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleFileDrop}
        style={{
          width: '60%',
          height: '350px',
          border: `2px dashed ${isDragging ? '#C70039' : '#000'}`,
          borderRadius: '12px',
          backgroundColor: isDragging ? '#F8D7DA' : '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '30px auto',
        }}
      >
        <h3 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold' }}>
          Drag and drop your resume here
        </h3>
        <p style={{ color: '#555', fontSize: '14px' }}>or</p>
        <label
          className="button--upload"
          style={{
            backgroundColor: '#FFF',
            color: '#000',
            border: '1px solid #000',
            padding: '10px 25px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          <input
            type="file"
            className="hide-input"
            onChange={handleUploadClick}
            style={{ display: 'none' }}
          />
          Select a file
        </label>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

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
      setLoading(false);
    }
  };

  return (

    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}>
          <div className="spinner-border text-light" role="status" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}


    
    <div className="main-container" style={{ backgroundColor: '#F4F4F4', marginBottom: '0' }}>
      <Navbar /> {/* Add the Navbar component here */}
      <DragDropResume loading={loading} handleUploadClick={handleUploadClick}>
      </DragDropResume>
      <Footer /> {/* Add the Footer component here */}
    </div>
    </>
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
