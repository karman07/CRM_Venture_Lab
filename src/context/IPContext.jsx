import React, { createContext, useContext, useState } from 'react';

const IPContext = createContext();

const initialIPs = [
  { id: 1, type: 'Patent', number: '123465', description: 'Design Patent', status: 'Applied', date: '1-10-2020' },
  { id: 2, type: 'Patent', number: '234563', description: 'Design Patent', status: 'Applied', date: '1-10-2020' },
  { id: 3, type: 'Patent', number: '202301', description: 'Design Patent', status: 'Approved', date: '1-10-2020' },
  { id: 4, type: 'Patent', number: '301208', description: 'Design Patent', status: 'Approved', date: '5-10-2020' },
];

export const IPProvider = ({ children }) => {
  const [ips, setIps] = useState(initialIPs);

  const updateIP = (id, updatedData) => {
    setIps(prev => prev.map(ip => (ip.id === id ? { ...ip, ...updatedData } : ip)));
  };

  const deleteIP = (id) => {
    setIps(prev => prev.filter(ip => ip.id !== id));
  };

  return (
    <IPContext.Provider value={{ ips, updateIP, deleteIP }}>
      {children}
    </IPContext.Provider>
  );
};

export const useIPContext = () => useContext(IPContext);
