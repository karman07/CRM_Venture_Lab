import React, { createContext, useContext } from 'react';

const InfoCardContext = createContext();

export const InfoCardProvider = ({ children }) => {
  const cards = [
    { title: 'Incubator Funding', value: '100000', unit: 'Rupees' },
    { title: 'External Funding', value: '20000', unit: 'Rupees' },
    { title: 'Employment Generated', value: '3', unit: 'Total Employees' },
    { title: 'Annual Revenue', value: '10,00,000', unit: 'Rupees' },
  ];

  return (
    <InfoCardContext.Provider value={{ cards }}>
      {children}
    </InfoCardContext.Provider>
  );
};

export const useInfoCards = () => useContext(InfoCardContext);
