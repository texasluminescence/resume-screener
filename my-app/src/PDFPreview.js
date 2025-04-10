// PDFPreview.js
import React, { useState, useMemo } from 'react';
import { Document, Page } from 'react-pdf';

function PDFPreview({ file }) {
  const [numPages, setNumPages] = useState(null);

  // Create the Object URL once per file
  const fileUrl = useMemo(() => {
    return URL.createObjectURL(file);
  }, [file]);

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages);
  }

  if (!file) return null;

  return (
    <div
      style={{
        width: '90%',
        maxWidth: '1200px',
        margin: '2rem auto',
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f8f8f8',
          position: 'relative',
        }}
      >
        <h3
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#f8f8f8',
            margin: 0,
            padding: '1rem',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          Preview of: {file.name}
        </h3>

        <div
          style={{
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '1rem',
          }}
        >
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p>Loading PDF...</p>}
            noData={<p>No PDF file specified</p>}
          >
            {numPages &&
              Array.from({ length: numPages }, (_, i) => (
                <div
                  key={`page_${i + 1}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '1rem 0',
                  }}
                >
                  <Page pageNumber={i + 1} width={900} />
                </div>
              ))
            }
          </Document>
        </div>
      </div>
    </div>
  );
}

// Also wrap in React.memo to skip re-render if 'file' hasn't changed
export default React.memo(PDFPreview);