import React, { createContext, useContext, useState } from 'react';

const FundingContext = createContext();

export const FundingProvider = ({ children }) => {
  const [incubatorFundings, setIncubatorFundings] = useState([
    { id: 1, date: '11 Jan 2024', amount: 'TIET', program: 'Student Growth Plan', agency: 'Venture Lab' },
    { id: 2, date: '11 Jan 2024', amount: 'TIET', program: 'Student Growth Plan', agency: 'Venture Lab' },
  ]);
  const [externalFundings, setExternalFundings] = useState([
    { id: 3, date: '11 Jan 2024', amount: 'TIET', program: 'Student Growth Plan', agency: 'Venture Lab' },
  ]);

  const addFunding = (type, newItem) => {
    if (type === 'incubator') setIncubatorFundings(prev => [...prev, { id: Date.now(), ...newItem }]);
    else setExternalFundings(prev => [...prev, { id: Date.now(), ...newItem }]);
  };

  const editFunding = (type, updatedItem) => {
    const updater = (item) => (item.id === updatedItem.id ? updatedItem : item);
    if (type === 'incubator') setIncubatorFundings(prev => prev.map(updater));
    else setExternalFundings(prev => prev.map(updater));
  };

  const deleteFunding = (type, id) => {
    if (type === 'incubator') setIncubatorFundings(prev => prev.filter(item => item.id !== id));
    else setExternalFundings(prev => prev.filter(item => item.id !== id));
  };

  return (
    <FundingContext.Provider value={{ incubatorFundings, externalFundings, addFunding, editFunding, deleteFunding }}>
      {children}
    </FundingContext.Provider>
  );
};

export const useFunding = () => useContext(FundingContext);
