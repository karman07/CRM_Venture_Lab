import React from 'react';
import IncubatorMainLayout from '../layout/IncubatorMainLayout';
import DocumentsTable from '../components/documents/DocumentsTable';
import MainLayout from '../layout/Layout';

const DocumentsPage = () => {
  return (
    <MainLayout>
      <IncubatorMainLayout>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Documents</h1>
        <DocumentsTable />
      </IncubatorMainLayout>
    </MainLayout>
  );
};

export default DocumentsPage;
