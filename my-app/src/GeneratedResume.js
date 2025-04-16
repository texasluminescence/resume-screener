// GeneratedResumePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';

export default function GeneratedResumePage() {
  const { state } = useLocation();          // { formData, files }

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: '#F4F4F4',
          minHeight: '100vh',
          padding: '60px 0',
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: '600',
        }}
      >
        GENERATED RESUME SHOULD BE HERE
      </div>

      <Footer />
    </>
  );
}
