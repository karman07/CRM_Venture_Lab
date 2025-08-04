import React from 'react';
import defaultLogo from '../assets/person_default.png'; 

const IncubatorCard = ({ logo, name }) => (
  <div className="flex items-center justify-start gap-4 bg-white border rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[200px]">
    <img
      src={logo || defaultLogo}
      alt={name}
      className="h-10 w-10 object-contain rounded-md"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = defaultLogo;
      }}
    />
    <span className="text-base font-semibold text-gray-800">{name}</span>
  </div>
);

export default IncubatorCard;
