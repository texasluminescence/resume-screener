import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./ResumeDisplay.css";



function ResumeDisplay( {fileData, mimeType }) {

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
    // Create URL only if we have valid PDF data
  const pdfUrl = fileData && mimeType === 'application/pdf' 
    ? `data:${mimeType};base64,${fileData}`
    : null;
  
  console.log('PDF URL created:', !!pdfUrl); // Debug log



  return (
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
  )
}


export default ResumeDisplay; 