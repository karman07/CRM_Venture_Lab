import { createContext, useContext, useState } from 'react';

const StartupContext = createContext();

export const StartupProvider = ({ children }) => {
  const [startup, setStartup] = useState({
    name: 'ThinkWAVeeeee',
    sector: 'Professional Service',
    industry: 'Goods and Services',
    address: 'C/O POONAM PASWAN SHIWANI VIHAR APARTMENT, DWARKA, SECTOR 23 B, NEW DELHI, South West, Delhi, DL, 110075, IN',
    transactionType: 'B2B2C',
    registrationType: 'Sole Proprietorship',
    email: 'kanishkdave6@gmail.com',
    phone: '+91 9056026454',
    cinNo: '12345643221',
    cinDate: '11-11-2023',
    dpitNo: '123456789431',
    dpitDate: '11-11-2023',
    tanNo: '123456789431',
    panNo: '123456789431',
    stage: 'Idea',
    revenue: '10,000',
    valuation: '12,000 ₹',
    employees: 4,
    customers: 100,
    demoUrl: 'https://product.demo'
  });

  const updateStartup = (updated) => setStartup(updated);

  return (
    <StartupContext.Provider value={{ startup, updateStartup }}>
      {children}
    </StartupContext.Provider>
  );
};

export const useStartup = () => useContext(StartupContext);
