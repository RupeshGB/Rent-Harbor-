import React, { useState } from 'react';

function LeaseAgreementContent({ propertyId }) {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDocuments([...documents, { file, url }]);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', borderRadius: '10px', padding: '20px', backgroundColor: 'white', width: '100%' }}>
        <h2 className="text-xl font-bold">Property {propertyId}</h2>
        <p className="mt-4">Address: 3885 Grey Abbey Drive</p>
        <p className="mb-6">Current Leasor: John Smith</p>
        <label
          htmlFor={`file-upload-${propertyId}`}
          className="border border-black px-4 py-2 rounded-md cursor-pointer mb-200"  // Added mb-4 for margin bottom
        >
          Upload Document
        </label>
        <input
          id={`file-upload-${propertyId}`}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleUpload}
          style={{ display: 'none' }}
        />
        <div className="mt-8">
          <h2 className="text-l font-bold">Uploaded Documents for Property {propertyId}</h2>
          <ul className="list-none p-0">
            {documents.map((document, index) => (
              <li key={index} className="mb-2">
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {document.file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeaseAgreementContent;