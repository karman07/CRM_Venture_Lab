import React, { createContext, useContext, useState } from 'react';

const AwardsContext = createContext();

export const useAwards = () => useContext(AwardsContext);

export const AwardsProvider = ({ children }) => {
  const [awards, setAwards] = useState([]);
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addOrUpdateAward = (award) => {
    setAwards((prev) => {
      const exists = prev.find((a) => a.id === award.id);
      if (exists) {
        return prev.map((a) => (a.id === award.id ? award : a));
      } else {
        return [...prev, { ...award, id: Date.now() }];
      }
    });
    closeModal();
  };

  const openModal = (award = null) => {
    setSelectedAward(award);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAward(null);
    setIsModalOpen(false);
  };

  return (
    <AwardsContext.Provider
      value={{ awards, selectedAward, isModalOpen, addOrUpdateAward, openModal, closeModal }}
    >
      {children}
    </AwardsContext.Provider>
  );
};
