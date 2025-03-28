import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./ResumeMenu.css"

const ResumeMenu = (  { isOpen, sidebarRef }   ) => {
  const resumes = [
    { id: 1, name: "John Doe", content: "John's resume content..." },
    { id: 2, name: "Jane Smith", content: "Jane's resume content..." },
    { id: 3, name: "Bob Johnson", content: "Bob's resume content..." },
    { id: 4, name: "Alice Brown", content: "Alice's resume content..." },
    { id: 1, name: "John Doe", content: "John's resume content..." },
    { id: 2, name: "Jane Smith", content: "Jane's resume content..." },
    { id: 3, name: "Bob Johnson", content: "Bob's resume content..." },
    { id: 4, name: "Alice Brown", content: "Alice's resume content..." },
    { id: 1, name: "John Doe", content: "John's resume content..." },
    { id: 2, name: "Jane Smith", content: "Jane's resume content..." },
    { id: 3, name: "Bob Johnson", content: "Bob's resume content..." },
    { id: 4, name: "Alice Brown", content: "Alice's resume content..." },
  ];

  const [selectedResume, setSelectedResume] = useState(resumes[0]);


  return (
        <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
            {resumes.map((resume) => (
              <div className="sidebar-rectangle">
                <div className="sidebar-footer">
                  <h1 className="sidebar-text">{resume.name}</h1>
                  <h1 className="sidebar-score-text">Score: 89</h1>
                </div>
              </div>
            ))}
        </div>
  );
};

export default ResumeMenu;