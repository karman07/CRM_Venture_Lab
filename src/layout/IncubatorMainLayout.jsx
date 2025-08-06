import React from 'react';
import IncubatorMainTab from '../components/IncubatorMainTab';

const IncubatorMainLayout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <IncubatorMainTab />
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default IncubatorMainLayout;
