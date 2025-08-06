// src/components/IncubatorsSelection.js
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NAV_KEY = 'selected-main-nav';

const IncubatorsSelection = ({ children }) => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(() => {
    return localStorage.getItem(NAV_KEY) || '/my-incubator';
  });

  useEffect(() => {
    localStorage.setItem(NAV_KEY, location.pathname);
    setActiveNav(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b p-0 shadow-sm">
        <div className="flex space-x-6 font-medium text-sm px-4">
          <NavLink
            to="/my-incubator"
            className={`relative py-4 transition ${
              activeNav === '/my-incubator'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600 text-gray-700'
            }`}
          >
            My Incubators
            {activeNav === '/my-incubator' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t" />
            )}
          </NavLink>
          <NavLink
            to="/apply"
            className={`relative py-4 transition ${
              activeNav === '/apply'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600 text-gray-700'
            }`}
          >
            Apply For Incubation
            {activeNav === '/apply' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t" />
            )}
          </NavLink>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default IncubatorsSelection;
