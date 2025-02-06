import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import MatrixRubric from "./MatrixRubric.js";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "../css_files/Results.css";



function MyAccordion({ name }) {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const items = ["Apple", "Banana", "Cherry", "Watermelon", "Dragonfruit"];
  
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
    <div className = "results-giant-container">
    <div className="results-content">
      <Accordion className="custom-accordion">

      {items.map((item, index) => (
    <Accordion.Item eventKey={index.toString()} key={index}>
      <Accordion.Header>{item}</Accordion.Header>
      <Accordion.Body>
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
      </Accordion.Body>
    </Accordion.Item>
  ))}
        
      </Accordion>
    </div>
    </div>
  ); 
}

export default MyAccordion; 