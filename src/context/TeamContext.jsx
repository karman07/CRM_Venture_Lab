import React, { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Product Designer', avatar: '' },
    { id: 2, name: 'Mark Lee', role: 'Frontend Developer', avatar: '' },
  ]);

  const addMember = (member) => {
    setTeam((prev) => [...prev, { ...member, id: Date.now() }]);
  };

  const updateMember = (id, updated) => {
    setTeam((prev) => prev.map((m) => (m.id === id ? { ...m, ...updated } : m)));
  };

  const deleteMember = (id) => {
    setTeam((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addMember, updateMember, deleteMember }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
