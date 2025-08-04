import React from 'react';
import StartupNavTabs from '../components/StartupNavTabs';

const StartUpLayout = ({ children }) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <StartupNavTabs />
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default StartUpLayout;
