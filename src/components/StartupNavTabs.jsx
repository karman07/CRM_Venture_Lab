import { NavLink, useLocation } from 'react-router-dom';
import { tabs } from '../navigation/StartUp';

const StartupNavTabs = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-xl border p-2 shadow-sm">
      <div className="flex gap-6 px-4 py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `pb-1 font-medium ${
                isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-black'
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

export default StartupNavTabs;
