import React, { createContext, useContext } from 'react';
import logo from '../assets/logo.png';

const IncubatorContext = createContext();

export const IncubatorProvider = ({ children }) => {
  const incubators = [
    { name: 'VENTURE LABS', logo },
    { name: 'C.R.E.A.T.E', logo },
    { name: 'NMIMS AIC', logo },
    { name: 'SRM IAIC', logo },
  ];

  return (
    <IncubatorContext.Provider value={{ incubators }}>
      {children}
    </IncubatorContext.Provider>
  );
};

export const useIncubators = () => useContext(IncubatorContext);
