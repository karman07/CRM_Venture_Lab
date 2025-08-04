import React, { createContext, useContext } from 'react';

const StartupInfoContext = createContext();

export const StartupInfoProvider = ({ children }) => {
  const startupInfo = {
    industry: 'Business services',
    cin: 'U74999DL2021PTC385097',
    sector: 'Professional Service',
    cinDate: '08/12/2021',
    regAddress: 'Delhi, India',
    commAddress: 'Delhi, India',
    diit: '1234534',
  };

  return (
    <StartupInfoContext.Provider value={{ startupInfo }}>
      {children}
    </StartupInfoContext.Provider>
  );
};

export const useStartupInfo = () => useContext(StartupInfoContext);
