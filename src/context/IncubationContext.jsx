import React, { createContext, useContext } from 'react';

const IncubationContext = createContext();

export const useIncubation = () => useContext(IncubationContext);

export const IncubationProvider = ({ children }) => {
  const incubators = [
    {
      id: 1,
      name: 'Venture Labs',
      programs: [
        {
          id: 'miety',
          title: 'MEITY',
          lastDate: '2023-11-11',
          description: 'A government-backed program supporting innovation.',
        },
        {
          id: 'sisfs',
          title: 'SISFS',
          lastDate: '2023-11-11',
          description: 'Startup India Seed Fund Scheme to nurture new ideas.',
        },
      ],
    },
    {
      id: 2,
      name: 'IM PUNJAB',
      programs: [],
    },
  ];

  return (
    <IncubationContext.Provider value={{ incubators }}>
      {children}
    </IncubationContext.Provider>
  );
};
