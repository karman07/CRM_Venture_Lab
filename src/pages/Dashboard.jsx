import React from 'react';
import MainLayout from '../layout/Layout';
import InfoCard from '../components/InfoCard';
import IncubatorCard from '../components/IncubatorCard';
import TeamCard from '../components/TeamCard';

import { useInfoCards } from '../context/InfoCardContext';
import { useIncubators } from '../context/IncubatorContext';
import { useTeam } from '../context/TeamContext';
import { useStartupInfo } from '../context/StartupInfoContext';

const Dashboard = () => {
  const { cards } = useInfoCards();
  const { incubators } = useIncubators();
  const { team } = useTeam();
  const { startupInfo } = useStartupInfo();

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">Incubators / Accubators</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {incubators.map((item, idx) => (
          <IncubatorCard key={idx} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Startup Info */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Startup Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Industry:</strong><br />{startupInfo.industry}</p>
            <p><strong>CIN Number:</strong><br />{startupInfo.cin}</p>
            <p><strong>Sector:</strong><br />{startupInfo.sector}</p>
            <p><strong>CIN Date:</strong><br />{startupInfo.cinDate}</p>
            <p><strong>Registration Address:</strong><br />{startupInfo.regAddress}</p>
            <p><strong>Communication Address:</strong><br />{startupInfo.commAddress}</p>
            <p><strong>DIIT No.:</strong><br />{startupInfo.diit}</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Team Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
