import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './css_files/Results.css';
import MatrixRubric from "./components/MatrixRubric.js";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; 
import ButtonHeader from "./components/ButtonHeader.js"; 
import ResumeDisplay from './components/ResumeDisplay.js';
import ResumeMenu from './components/ResumeMenu.js'; 
import { Container, Row, Col } from 'react-bootstrap';

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

      <ButtonHeader></ButtonHeader>
      <div className="results-giant-container">
        <Container fluid>
        <Row>
          <Col  md={4} lg={2}>
            <ResumeMenu></ResumeMenu>
          </Col>
          <Col className="d-flex justify-content-center w-100">
            <ResumeDisplay></ResumeDisplay>
          </Col>
          <Col  lg={5} >
            <MatrixRubric></MatrixRubric>
          </Col>
        </Row>
        </Container>
      </div>




      


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Results;
