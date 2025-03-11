// GeneratePage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BulkUploadPreview from './BulkUploadPreview';

export default function GeneratePage() {
  const location = useLocation();
  const files = location.state?.files || [];

  const [formData, setFormData] = useState({
    name: '',
    school: '',
    major: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Generate Page</h1>

        {/* If exactly one file is uploaded, show a preview */}
        {files.length === 1 && (
          <div style={{ margin: '2rem auto' }}>
            <BulkUploadPreview bulkFiles={files} />
          </div>
        )}

        {/* Textareas for Name, School, Major */}
        <div
          style={{
            marginTop: '2rem',
            width: '50%',
            margin: '2rem auto',
            textAlign: 'left',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontWeight: 'bold' }}>Name:</span>
            <textarea
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{
                display: 'block',
                width: '100%',
                marginTop: '0.5rem',
                height: '40px',
                resize: 'vertical',
                padding: '8px',
                fontSize: '16px',
                backgroundColor: '#FFF',
                border: '1px solid #ccc',
                borderRadius: '6px',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontWeight: 'bold' }}>School:</span>
            <textarea
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter your school"
              style={{
                display: 'block',
                width: '100%',
                marginTop: '0.5rem',
                height: '40px',
                resize: 'vertical',
                padding: '8px',
                fontSize: '16px',
                backgroundColor: '#FFF',
                border: '1px solid #ccc',
                borderRadius: '6px',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontWeight: 'bold' }}>Major:</span>
            <textarea
              name="major"
              value={formData.major}
              onChange={handleChange}
              placeholder="Enter your major"
              style={{
                display: 'block',
                width: '100%',
                marginTop: '0.5rem',
                height: '40px',
                resize: 'vertical',
                padding: '8px',
                fontSize: '16px',
                backgroundColor: '#FFF',
                border: '1px solid #ccc',
                borderRadius: '6px',
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
