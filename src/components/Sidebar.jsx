import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaHome,
  FaRocket,
  FaBuilding,
  FaBolt,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedPath, setSelectedPath] = useState(() => localStorage.getItem('selectedPath') || '/dashboard');
  const [openDropdown, setOpenDropdown] = useState(() => {
    const open = localStorage.getItem('openDropdown');
    return open ? JSON.parse(open) : null;
  });

  useEffect(() => {
    setSelectedPath(location.pathname);
    localStorage.setItem('selectedPath', location.pathname);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    setSelectedPath(path);
    localStorage.setItem('selectedPath', path);
    navigate(path);
  };

  const toggleDropdown = (label) => {
    const newValue = openDropdown === label ? null : label;
    setOpenDropdown(newValue);
    localStorage.setItem('openDropdown', JSON.stringify(newValue));
  };

  const menu = [
    { label: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { label: 'Startup Profile', icon: <FaRocket />, path: '/startup' },
    {
      label: 'Incubators',
      icon: <FaBuilding />,
      dropdown: [
        { label: 'My Incubators', path: '/my-incubator' },
        { label: 'Apply For Incubation', path: '/apply' },
      ],
    },
    { label: 'Accelerators', icon: <FaBolt />, path: '/accelerators' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <span className="text-xl font-bold">Venture Lab</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => (
          <div key={item.label}>
            {item.dropdown ? (
              <>
                <div
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  <div className="mr-3 text-blue-700">{item.icon}</div>
                  <span className="flex-1 text-gray-700 font-medium">{item.label}</span>
                  {openDropdown === item.label ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openDropdown === item.label && (
                  <div className="pl-10 space-y-1">
                    {item.dropdown.map((sub) => (
                      <div
                        key={sub.label}
                        onClick={() => handleNavigate(sub.path)}
                        className={`block p-2 rounded hover:bg-gray-100 cursor-pointer ${
                          selectedPath === sub.path ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div
                onClick={() => handleNavigate(item.path)}
                className={`flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer ${
                  selectedPath === item.path ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                }`}
              >
                <div className="mr-3 text-blue-700">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            )}
          </div>
        ))}

        {/* Logout */}
        <div
          className="mt-6 flex items-center p-2 text-red-600 hover:bg-red-100 rounded cursor-pointer"
          onClick={() => console.log('Logout')}
        >
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
