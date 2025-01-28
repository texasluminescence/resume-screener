import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDFPreview({ file }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages);
  }

  if (!file) return null;

  return (
    <div
      style={{
        // Center the preview as before
        width: '90%',
        maxWidth: '1200px',
        margin: '2rem auto',
      }}
    >
      {/* Outer wrapper for border/background */}
      <div
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f8f8f8',
          // position: 'relative' so we can do sticky heading inside
          position: 'relative',
        }}
      >
        {/* Sticky heading so it doesn't scroll off screen */}
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

        {/* Scrollable container for the pages */}
        <div
          style={{
            maxHeight: '85vh',    // large vertical space
            overflowY: 'auto',    // scroll
            padding: '1rem',
          }}
        >
          <Document
            file={URL.createObjectURL(file)}
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
                    justifyContent: 'center',  // center horizontally
                    margin: '1rem 0',
                  }}
                >
                  {/* Make the pages bigger by increasing width or using scale */}
                  <Page pageNumber={i + 1} width={900} />
                  {/* or e.g.: <Page pageNumber={i + 1} scale={1.25} /> */}
                </div>
              ))
            }
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PDFPreview;
