import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const ResumeMenu = () => {
  const resumes = [
    { id: 1, name: "John Doe", content: "John's resume content..." },
    { id: 2, name: "Jane Smith", content: "Jane's resume content..." },
    { id: 3, name: "Bob Johnson", content: "Bob's resume content..." },
    { id: 4, name: "Alice Brown", content: "Alice's resume content..." },
  ];

  const [selectedResume, setSelectedResume] = useState(resumes[0]);

  return (
          <Card style={{ maxHeight: '400px' }}>
            <Card.Header>
              <h5 className="mb-0">Resumes</h5>
            </Card.Header>
            <ListGroup variant="flush" className="overflow-auto">
              {resumes.map((resume) => (
                <ListGroup.Item
                  key={resume.id}
                  action
                  active={selectedResume.id === resume.id}
                  onClick={() => setSelectedResume(resume)}
                >
                  {resume.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
  );
};

export default ResumeMenu;