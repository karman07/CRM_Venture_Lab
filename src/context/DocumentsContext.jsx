import React, { createContext, useContext } from 'react';

const DocumentsContext = createContext();

export const DocumentsProvider = ({ children }) => {
  const documents = [
    {
      name: 'Funding Detail file',
      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Himenaeos volutpat eros phasellus.',
      uploadedBy: 'Dr. Rajesh Kaushal',
      fileLink: '#',
    },
    {
      name: 'Annual Funding detail',
      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Himenaeos volutpat eros phasellus.',
      uploadedBy: 'Dr. Ruchi Mittal',
      fileLink: '#',
    },
    {
      name: 'Budget Format',
      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Himenaeos volutpat eros phasellus.',
      uploadedBy: 'Mr. Jagmeet Singh',
      fileLink: '#',
    },
    {
      name: 'Web Dev Content',
      description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Himenaeos volutpat eros phasellus.',
      uploadedBy: 'Mrs. Harpreet Kaur',
      fileLink: '#',
    },
  ];

  return (
    <DocumentsContext.Provider value={{ documents }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export const useDocuments = () => useContext(DocumentsContext);
