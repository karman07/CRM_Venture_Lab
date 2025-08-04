import React from 'react';
import { useAwards } from '../../context/AwardsContext';

const AwardsCard = ({ award }) => {
  const { openModal } = useAwards();

  return (
    <div className="rounded-xl shadow-md border bg-white p-4 relative w-full max-w-sm">
      <img
        src="https://via.placeholder.com/400x150?text=StartUp+Awards"
        alt="Award"
        className="rounded-md mb-3"
      />
      <button
        onClick={() => openModal(award)}
        className="absolute top-2 right-2 bg-white shadow px-2 py-1 rounded-md text-sm"
      >
        Edit
      </button>
      <div className="text-sm space-y-1">
        <p><strong>Name:</strong> {award.name}</p>
        <p><strong>Date:</strong> {award.date}</p>
        <p><strong>Organization:</strong> {award.organization}</p>
        <p><strong>Categories:</strong> {award.categories}</p>
        <p><strong>Description:</strong> {award.description}</p>
      </div>
    </div>
  );
};

export default AwardsCard;
