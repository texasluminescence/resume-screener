import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './css_files/Results.css';
import MatrixRubric from "./components/MatrixRubric.js";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; 
import ResumeMenu from './components/ResumeMenu.js'; 
import Button from 'react-bootstrap/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const Results = () => {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false); 
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log('PDF loaded successfully with', numPages, 'pages');
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
  }

  function toggleSidebar () {
    if(isOpen) {
      setIsOpen(false); 
    } else {
      setIsOpen(true); 
    }
  }

  const { fileData, mimeType } = location.state || {};
  // Create URL only if we have valid PDF data
  const pdfUrl = fileData && mimeType === 'application/pdf' 
    ? `data:${mimeType};base64,${fileData}`
    : null;

  console.log('PDF URL created:', !!pdfUrl); // Debug log

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
        <Button onClick={toggleSidebar}>View All Resumes</Button>
        <ResumeMenu isOpen ={isOpen} sidebarRef = {sidebarRef}></ResumeMenu>
        <div className="resume-preview">
          {pdfUrl ? (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading="Loading PDF..."
            >
              <Page 
                pageNumber={1} 
                scale={1.5}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          ) : (
            <p>No PDF file available to preview</p>
          )}
        </div>
        <div className="matrix-container">
          <MatrixRubric initialSelections={initialSelections}/>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Results;