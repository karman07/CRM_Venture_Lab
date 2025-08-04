import React from 'react';
import { useAwards } from '../../context/AwardsContext';
import AwardsCard from './AwardsCard';
import AwardsModal from './AwardsModal';

const AwardsSection = () => {
  const { awards, openModal } = useAwards();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Awards</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Awards
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award) => (
          <AwardsCard key={award.id} award={award} />
        ))}
      </div>
      <AwardsModal />
    </div>
  );
};

export default AwardsSection;
