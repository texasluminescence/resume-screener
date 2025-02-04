// BulkUploadPreview.js
import React, { useState } from 'react';
import PDFPreview from './PDFPreview'; // or use react-pdf directly

export default function BulkUploadPreview({ bulkFiles }) {
  const [selectedFile, setSelectedFile] = useState(bulkFiles[0] || null);

  if (bulkFiles.length === 1) {
    // Exactly one file => just show the preview, no heading or list
    return <PDFPreview file={bulkFiles[0]} />;
  } else {
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
}
