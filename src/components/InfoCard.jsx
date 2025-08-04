import React from 'react';

const InfoCard = ({ title, value, unit }) => (
  <div className="flex-1 min-w-[200px] bg-white rounded-lg p-4 border shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
    <p className="text-xs text-gray-400 mt-1">{unit}</p>
  </div>
);

export default InfoCard;
