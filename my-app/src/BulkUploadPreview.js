// BulkUploadPreview.js
import React, { useState, useEffect } from 'react';
import PDFPreview from './PDFPreview';

function BulkUploadPreview({ bulkFiles }) {
  // Only initialize selectedFile once
  const [selectedFile, setSelectedFile] = useState(() => bulkFiles[0] || null);

  // If the parent updates `bulkFiles` (e.g. new file uploaded),
  // ensure our selectedFile is still valid
  useEffect(() => {
    if (!selectedFile || !bulkFiles.includes(selectedFile)) {
      setSelectedFile(bulkFiles[0] || null);
    }
  }, [bulkFiles, selectedFile]);

  if (bulkFiles.length === 1) {
    // Exactly one file => just show the PDF preview (no list)
    return <PDFPreview file={bulkFiles[0]} />;
  }

  // Multiple or zero files => show clickable list + preview
  return (
    <div>
      <h2>Uploaded Files (not yet analyzed):</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bulkFiles.map((file, idx) => (
          <li
            key={idx}
            style={{ margin: '6px 0', cursor: 'pointer', color: 'blue' }}
            onClick={() => setSelectedFile(file)}
          >
            {file.name}
          </li>
        ))}
      </ul>

      {selectedFile && <PDFPreview file={selectedFile} />}
    </div>
  );
}

// Wrap in React.memo to avoid re-renders unless `bulkFiles` actually changes
export default React.memo(BulkUploadPreview);
