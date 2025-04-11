import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
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
import BulkUploadPreview from './BulkUploadPreview';
import BulkResult from './BulkResult';
import { Document, Page } from 'react-pdf';
import GeneratePage from './GeneratePage';

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

function DragDropResume({ handleAnalyzeFiles }) {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  // Whether we allow multiple files or just single
  const [bulkUpload, setBulkUpload] = useState(false);

  // either paste or file upload
  const [pasteMode, setPasteMode] = useState(false);

  // Stores all uploaded files (1 or many)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // If user signs out => clear everything
  useEffect(() => {
    if (!user) {
      setBulkUpload(false);
      setUploadedFiles([]);
    }
  }, [user]);

  // Only show drag-drop + welcome text if we have 0 files
  const hasFiles = uploadedFiles.length > 0;

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (files) => {
    if (!files || !files.length) return;

    if (bulkUpload) {
      // In bulk mode, append them
      setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
    } else {
      // Single mode => keep only the first
      setUploadedFiles([files[0]]);
    }
  };

  // For dropping onto the rectangle
  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleDrop(e.dataTransfer.files);
  };

  // For clicking "Select a file/folder"
  const handleFileSelect = (e) => {
    handleDrop(e.target.files);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      {!hasFiles && (
        <>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Welcome to CV Revive</h1>
          <p style={{ fontSize: '18px' }}>
            Optimize your resume with AI-powered tools and land your dream job!
          </p>
        </>
      )}

      {/* Radio Buttons for Mode */}
      {user && !hasFiles && (
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '1rem', fontSize: '16px' }}>
            <input
              type="radio"
              checked={!pasteMode}
              onChange={() => setPasteMode(false)}
            />{' '}
            File Upload
          </label>
          <label style={{ fontSize: '16px' }}>
            <input
              type="radio"
              checked={pasteMode}
              onChange={() => setPasteMode(true)}
              style={{ marginLeft: '8px' }}
            />{' '}
            Paste Resume Text
          </label>
        </div>
      )}

      {!pasteMode && user && !hasFiles && (
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '16px', fontWeight: 600 }}>
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

      {!pasteMode && !hasFiles && (
        <div
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
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Drag and drop your resume here</h3>
          <p style={{ fontSize: '14px' }}>or</p>
          <label
            style={{
              backgroundColor: '#FFF',
              border: '1px solid #000',
              padding: '10px 25px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <input
              type="file"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              multiple={bulkUpload}
              directory={bulkUpload ? '' : undefined}
              webkitdirectory={bulkUpload ? '' : undefined}
            />
            {bulkUpload ? 'Select a folder' : 'Select a file'}
          </label>
        </div>
      )}

      {hasFiles && (
        <button
          onClick={() => handleAnalyzeFiles(uploadedFiles)}
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          {uploadedFiles.length === 1 ? 'Analyze' : 'Analyze All'}
        </button>
      )}

      {user && !pasteMode && uploadedFiles.length === 1 && (
        <>
          <button
            onClick={() => {
              navigate('/generate', { state: { files: uploadedFiles } });
            }}
            style={{
              display: 'block',
              margin: '20px auto',
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Generate
          </button>
        </>
      )}

      {hasFiles && (
        <div style={{ marginTop: '2rem' }}>
          <BulkUploadPreview bulkFiles={uploadedFiles} />
        </div>
      )}

      {pasteMode && (
        <>
          <button
            onClick={() => {
              navigate('/generate', { state: { files: uploadedFiles } });
            }}
            style={{
              display: 'block',
              margin: '20px auto',
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Generate
          </button>
        </>
      )}

      {/* Paste Box */}
      {pasteMode && (
        <div
          style={{
            width: '60%',
            height: '350px',
            border: '2px dashed #000', // same dashed border
            borderRadius: '12px',
            backgroundColor: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            margin: '30px auto', // center horizontally
            padding: '1rem', // some inner padding
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ margin: '0 0 0.5rem 0', textAlign: 'left' }}>
            Paste your resume text here:
          </h2>

          <textarea
            placeholder="Type or paste your resume text..."
            style={{
              flex: 1, // fills remaining vertical space
              width: '100%',
              resize: 'vertical', // user can still resize if they want
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '8px',
              fontSize: '16px',
              overflowY: 'auto',
            }}
          />
        </div>
      )}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [fileDataList, setFileDataList] = useState([]);
  const navigate = useNavigate();

  // Called by "Analyze" button
  const handleAnalyzeFiles = async (files) => {
    if (!files || !files.length) return;
    if (files.length === 1) {
      await handleSingleFileUpload(files[0]);
    } else {
      // TODO
      //bulk backend call
      const newFileDataList = [];

      setLoading(true);

      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8080/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        newFileDataList.push({
          name: file.name,
          base64Data: data.fileData,
          mimeType: data.mimeType,
        });
      }

      setFileDataList(newFileDataList);
      setLoading(false);

      // Navigate and pass all files as state
      navigate('/bulk_results', {
        state: { files: newFileDataList },
      });
    }
  };

  const handleSingleFileUpload = async (file) => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFileData({ base64Data: data.fileData, mimeType: data.mimeType });
      setLoading(false);

      //go to results
      navigate('/results', {
        state: { fileData: data.fileData, mimeType: data.mimeType },
      });
    } catch (err) {
      console.error('Upload error:', err);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          style={{
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
          }}
        >
          <div
            className="spinner-border text-light"
            role="status"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="main-container" style={{ backgroundColor: '#F4F4F4', marginBottom: '0' }}>
        <Navbar />

        <DragDropResume handleAnalyzeFiles={handleAnalyzeFiles} />

        <Footer />
      </div>
    </>
  );
}


function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/results" element={<Results />} />
      <Route path="/generate" element={<GeneratePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/bulk_results" element={<BulkResult />} />
    </Routes>
  );
}

export default MainApp;
