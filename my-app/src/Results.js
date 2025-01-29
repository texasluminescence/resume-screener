import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './css_files/Results.css';
import MatrixRubric from "./components/MatrixRubric.js";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; 
import Accordion from 'react-bootstrap/Accordion';
import MyAccordion from "./components/MyAccordion.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js`;

const Results = () => {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log('PDF loaded successfully with', numPages, 'pages');
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
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


      <MyAccordion></MyAccordion>


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Results;
