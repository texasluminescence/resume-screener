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
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import SignIn from './pages/SignIn';

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

function DragDropResume({ loading, handleSingleFileUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  //track if we are signed in
  const { user } = useAuthenticator((context) => [context.user]);

  //bulk
  const [bulkUpload, setBulkUpload] = useState(false);
  const [bulkFiles, setBulkFiles] = useState([]);


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
    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles || droppedFiles.length == 0)
    {
      return;
    }
    
    if (!user)
    {
      //not signed in, do what was before
      handleSingleFileUpload(droppedFiles[0]);
    } else if (bulkUpload)
    {
      //bulk upload turned on
      setBulkFiles((prev) => [...prev, ...Array.from(droppedFiles)]);
    }
    else
    {
      //bulk upload turned off
      handleSingleFileUpload(droppedFiles[0]);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    if (!user)
      {
        //not signed in, do what was before
        handleSingleFileUpload(selectedFiles[0]);
      } else if (bulkUpload)
      {
        //bulk upload turned on
        setBulkFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
      }
      else
      {
        //bulk upload turned off
        handleSingleFileUpload(selectedFiles[0]);
      }
  };

  return (
    <div className="drag-drop-wrapper" style={{ textAlign: 'center', padding: '40px'}}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#2C3E50' }}>Welcome to CV Revive</h1>
      <p style={{ fontSize: '18px', color: '#34495E' }}>Optimize your resume with AI-powered tools and land your dream job!</p>
      {/* Only show the “Enable Bulk Upload” toggle if the user is signed in */}
      {user && (
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '16px', fontWeight: '600' }}>
            <input
              type="checkbox"
              checked={bulkUpload}
              onChange={() => setBulkUpload(!bulkUpload)}
              style={{ marginRight: '8px' }}
            />
            Enable Bulk Upload
          </label>
        </div>
      )}

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
            onChange={handleFileSelect}
            style={{ display: 'none' }}

            // If user toggles "bulkUpload" -> allow multiple files,
            // plus allow folder selection with webkitdirectory
            multiple={bulkUpload}
            directory={bulkUpload ? '' : undefined}
            webkitdirectory={bulkUpload ? '' : undefined}
          />
          {bulkUpload ? 'Select a folder' : 'Select a file'}
        </label>
      </div>
      {/* Show the list of bulk files (only if bulk is enabled) */}
      {bulkUpload && bulkFiles.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Uploaded Files (not yet analyzed):</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {bulkFiles.map((file, idx) => (
              <li key={idx} style={{ margin: '6px 0' }}>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
    
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState(null);
  const navigate = useNavigate();

  const handleSingleFileUpload = async (file) => {
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
      setFileData({
        base64Data: data.fileData,
        mimeType: data.mimeType
      });
      setLoading(false);
      navigate("/results", { state: { fileData: data.fileData, mimeType: data.mimeType } });

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
      <DragDropResume loading={loading} handleSingleFileUpload={handleSingleFileUpload}>
      </DragDropResume>
      <Footer /> {/* Add the Footer component here */}
    </div>
    </>
  );
}

function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/results" element={<Results />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default MainApp;
