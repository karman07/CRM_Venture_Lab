import React from 'react';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-[#F9FAFB] h-screen overflow-hidden">
      <div className="w-[250px] flex-shrink-0">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 overflow-y-auto h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
