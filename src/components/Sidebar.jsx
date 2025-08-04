import React from 'react';
import { COLORS } from '../constants/colors';
import { FaHome, FaRocket, FaBuilding, FaBolt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen bg-white border-r overflow-hidden flex flex-col justify-between" style={{ borderColor: COLORS.border }}>
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <span className="text-xl font-bold" style={{ color: COLORS.primary }}>Venture Lab</span>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2 flex-1">
        {[
          { icon: <FaHome />, label: 'Dashboard' },
          { icon: <FaRocket />, label: 'Startup Profile' },
          { icon: <FaBuilding />, label: 'Incubators' },
          { icon: <FaBolt />, label: 'Accelerators' },
        ].map((item) => (
          <div key={item.label} className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
            <div className="mr-3 text-blue-700">{item.icon}</div>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}

        <div className="mt-6 flex items-center p-2 text-red-600 hover:bg-red-100 rounded cursor-pointer">
          <FaSignOutAlt className="mr-3" />
          <span>Log Out</span>
        </div>
      </nav>

      {/* User Info */}
      <div className="px-4 py-4 flex items-center border-t">
        <img src="/avatar.png" alt="User" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-800">Kanishk Dadwal</p>
          <p className="text-xs text-gray-500">kanishkdadwal@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
