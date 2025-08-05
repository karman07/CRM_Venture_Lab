import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useDocuments } from '../../context/DocumentsContext';

const DocumentsTable = () => {
  const { documents } = useDocuments();
  const [expanded, setExpanded] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(documents.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = rowsPerPage === 'All' ? documents.length : startIdx + rowsPerPage;
  const currentDocs = rowsPerPage === 'All' ? documents : documents.slice(startIdx, endIdx);

  const handleRowsChange = (e) => {
    const value = e.target.value === 'All' ? 'All' : parseInt(e.target.value);
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <span className="text-sm text-gray-600 font-medium">Documents</span>
        <div className="flex items-center space-x-2">
          <label htmlFor="rowsPerPage" className="text-sm text-gray-600">
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsChange}
            className="border border-gray-300 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {[5, 10, 20, 'All'].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Uploaded By</th>
              <th className="px-6 py-4 text-left">File</th>
              <th className="px-6 py-4 text-center">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentDocs.map((doc, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-all duration-200">
                <td className="px-6 py-4 font-semibold whitespace-nowrap">{doc.name}</td>
                <td className="px-6 py-4 max-w-sm">
                  <span className="text-gray-700">
                    {expanded === idx ? doc.description : `${doc.description.slice(0, 60)}...`}
                  </span>
                  {doc.description.length > 60 && (
                    <button
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                      className="ml-2 text-blue-600 text-xs hover:underline focus:outline-none"
                    >
                      {expanded === idx ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">{doc.uploadedBy}</td>
                <td className="px-6 py-4">
                  <a
                    href={doc.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View File
                  </a>
                </td>
                <td className="px-6 py-4 text-center">
                  <a href={doc.fileLink} download title="Download file">
                    <FaDownload className="mx-auto text-gray-500 hover:text-blue-600 cursor-pointer transition" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rowsPerPage !== 'All' && (
        <div className="flex justify-between items-center p-4 text-sm text-gray-600">
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <div className="space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md border ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md border ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsTable;
