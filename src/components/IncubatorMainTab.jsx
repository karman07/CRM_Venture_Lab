import { NavLink, useLocation } from 'react-router-dom';
import { tabs } from '../navigation/IncubatorMain';

const IncubatorMainTab = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-xl border p-2 shadow-sm mb-4">
      <div className="flex flex-wrap gap-4 px-4 py-2 text-sm font-medium text-gray-600">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `relative pb-1 px-4 transition duration-200 ${
                isActive || location.pathname === tab.path
                  ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                  : 'hover:text-blue-500 hover:border-blue-400 border-b-2 border-transparent'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default IncubatorMainTab;
