// GeneratePage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './GeneratePage.css'; // <-- Import your CSS file

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BulkUploadPreview from './BulkUploadPreview';

export default function GeneratePage() {
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
          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Name:</span>
            <textarea
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Phone Number:</span>
            <textarea
              name="phone number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter your phone number:"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">School Email:</span>
            <textarea
              name="school email"
              value={formData.school_email}
              onChange={handleChange}
              placeholder="Enter your school email"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Github Username:</span>
            <textarea
              name="git user"
              value={formData.git_user}
              onChange={handleChange}
              placeholder="Enter your github username"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">LinkedIn Username:</span>
            <textarea
              name="linkedin user"
              value={formData.linkedin_user}
              onChange={handleChange}
              placeholder="Enter your LinkedIn username"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Expected Graduation:</span>
            <textarea
              name="grad data"
              value={formData.grad_data}
              onChange={handleChange}
              placeholder="Enter your expected graduation"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">GPA:</span>
            <textarea
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              placeholder="Enter your gpa"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Courses:</span>
            <textarea
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              placeholder="Enter your courses"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Tech Skills:</span>
            <textarea
              name="tech skills"
              value={formData.tech_skills}
              onChange={handleChange}
              placeholder="Enter your tech skills"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Languages:</span>
            <textarea
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              placeholder="Enter your languages"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Certificates:</span>
            <textarea
              name="certificates"
              value={formData.certificates}
              onChange={handleChange}
              placeholder="Enter your certificates"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Honors:</span>
            <textarea
              name="honors"
              value={formData.honors}
              onChange={handleChange}
              placeholder="Enter your honors"
              className="textareaField"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Experience:</span>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Describe your experiences"
              className="textareaFieldLarge"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Projects:</span>
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              placeholder="Describe your projects"
              className="textareaFieldLarge"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span className="labelTitle">Leadership:</span>
            <textarea
              name="leadership"
              value={formData.leadership}
              onChange={handleChange}
              placeholder="Describe your leadership experience"
              className="textareaFieldLarge"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
