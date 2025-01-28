// BulkUploadPreview.js
import React, { useState } from 'react';
import PDFPreview from './PDFPreview';

function BulkUploadPreview({ bulkFiles }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Uploaded Files (not yet analyzed):</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
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

      {selectedFile && (
        <PDFPreview file={selectedFile} />
      )}
    </div>
  );
}

export default BulkUploadPreview;
