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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Generate Page</h1>

        {files.length === 1 && (
          <div style={{ margin: '2rem auto' }}>
            <BulkUploadPreview bulkFiles={files} />
          </div>
        )}

        <div style={{ marginTop: '2rem', width: '50%', margin: '2rem auto', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', marginTop: '0.5rem' }}
              placeholder="Enter your name"
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            School:
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              style={{ width: '100%', marginTop: '0.5rem' }}
              placeholder="Enter your school"
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Major:
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              style={{ width: '100%', marginTop: '0.5rem' }}
              placeholder="Enter your major"
            />
          </label>
        </div>
      </div>

      <Footer />
    </>
  );
}
