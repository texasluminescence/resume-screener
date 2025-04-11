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
  const [pageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false); 
  const sidebarRef = useRef(null);
  const { files = [] } = location.state || {};
  const [selectedResumeIndex, setSelectedResumeIndex] = useState(0);

  const selectedResume = files[selectedResumeIndex];
  const pdfUrl =
    selectedResume && selectedResume.mimeType === 'application/pdf'
      ? `data:${selectedResume.mimeType};base64,${selectedResume.base64Data}`
      : null;

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
    setIsOpen(!isOpen);
  }

  const initialSelections = {
    formatAndStyle: "Good",
    experience: "Fair",
    skills: "Good",
    education: "Excellent"
  };

  return (
    <div className="columnheader_logo-one">
      <Navbar />
      <div className="results-content">
        <Button onClick={toggleSidebar}>View All Resumes</Button>
        <ResumeMenu
          isOpen={isOpen}
          sidebarRef={sidebarRef}
          resumes={files}
          onSelect={(index) => setSelectedResumeIndex(index)}
          selectedIndex={selectedResumeIndex}
        />
        <div className="resume-preview">
          {pdfUrl ? (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading="Loading PDF..."
            >
              <Page 
                pageNumber={pageNumber} 
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
      <Footer />
    </div>
  );
};

export default Results;
