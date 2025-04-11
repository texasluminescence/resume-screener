import React from 'react';
import "./ResumeMenu.css";

const ResumeMenu = ({ isOpen, sidebarRef, resumes, onSelect, selectedIndex }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      {resumes.map((resume, index) => (
        <div
          key={index}
          className={`sidebar-rectangle ${selectedIndex === index ? 'selected' : ''}`}
          onClick={() => onSelect(index)}
        >
          <div className="sidebar-footer">
            <h1 className="sidebar-text">Resume {index + 1}</h1>
            <h1 className="sidebar-score-text">Score: 89</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeMenu;
