import React, { createContext, useContext, useState } from 'react';

const UpdatesContext = createContext();

const initialUpdates = [
  { id: 1, date: 'Jan 2024', title: 'Description', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  { id: 2, date: 'Jan 2024', title: 'Description', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  { id: 3, date: 'Jan 2024', title: 'Description', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
];

export const UpdatesProvider = ({ children }) => {
  const [updates, setUpdates] = useState(initialUpdates);

  const addUpdate = (update) => {
    setUpdates(prev => [...prev, { ...update, id: Date.now() }]);
  };

  const updateUpdate = (id, newUpdate) => {
    setUpdates(prev => prev.map(update => update.id === id ? { ...update, ...newUpdate } : update));
  };

  return (
    <UpdatesContext.Provider value={{ updates, addUpdate, updateUpdate }}>
      {children}
    </UpdatesContext.Provider>
  );
};

export const useUpdates = () => useContext(UpdatesContext);
