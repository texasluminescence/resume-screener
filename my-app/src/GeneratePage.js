// GeneratePage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './GeneratePage.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BulkUploadPreview from './BulkUploadPreview';


export default function GeneratePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const files = location.state?.files || [];

  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    school_email: '',
    git_user: '',
    linkedin_user: '',
    grad_data: '',
    gpa: '',
    courses: '',
    tech_skills: '',
    languages: '',
    certificates: '',
    honors: '',
    experience: '',
    projects: '',
    leadership: '',
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerate = () => {
    navigate('/generated', { state: { formData, files } });
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: '#F4F4F4',
          minHeight: '100vh',
          padding: '40px 0',
          textAlign: 'center',
        }}
      >
        <h1>Generate Page</h1>

        <button
          onClick={handleGenerate}
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

        {files.length === 1 && (
          <div style={{ margin: '2rem auto' }}>
            <BulkUploadPreview bulkFiles={files} />
          </div>
        )}

        <div
          style={{
            marginTop: '2rem',
            width: '50%',
            margin: '2rem auto',
            textAlign: 'left',
          }}
        >
          <Field
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Field
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <Field
            label="School Email"
            name="school_email"
            value={formData.school_email}
            onChange={handleChange}
          />
          <Field
            label="Github Username"
            name="git_user"
            value={formData.git_user}
            onChange={handleChange}
          />
          <Field
            label="LinkedIn Username"
            name="linkedin_user"
            value={formData.linkedin_user}
            onChange={handleChange}
          />
          <Field
            label="Expected Graduation"
            name="grad_data"
            value={formData.grad_data}
            onChange={handleChange}
          />
          <Field
            label="GPA"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
          />
          <Field
            label="Courses"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
          />
          <Field
            label="Tech Skills"
            name="tech_skills"
            value={formData.tech_skills}
            onChange={handleChange}
          />
          <Field
            label="Languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
          <Field
            label="Certificates"
            name="certificates"
            value={formData.certificates}
            onChange={handleChange}
          />
          <Field
            label="Honors"
            name="honors"
            value={formData.honors}
            onChange={handleChange}
          />
          <Field
            label="Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            large
          />
          <Field
            label="Projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            large
          />
          <Field
            label="Leadership"
            name="leadership"
            value={formData.leadership}
            onChange={handleChange}
            large
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

function Field({ label, name, value, onChange, large = false }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <span className="labelTitle">{label}:</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={large ? 'textareaFieldLarge' : 'textareaField'}
      />
    </div>
  );
}
