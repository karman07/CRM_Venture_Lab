import React, { useState } from 'react';
import FundingTable from './FundingTable';
import { useFunding } from '../../context/FundingContext';
import FundingDialog from './FundingDialog';
import { COLORS } from '../../constants/colors';

const FundingTabs = () => {
  const { incubatorFundings = [], externalFundings = [] } = useFunding();
  const [activeTab, setActiveTab] = useState('incubator');
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow p-6 border"
      style={{ borderColor: COLORS.border }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          {['incubator', 'external'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab === 'incubator' ? 'Incubator Funding' : 'External Funding'}
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpenDialog(true)}
          className="px-4 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
          // style={{ backgroundColor: COLORS.primary }}
        >
          + Add Funding
        </button>
      </div>

      <FundingTable
        type={activeTab}
        data={activeTab === 'incubator' ? incubatorFundings : externalFundings}
      />

      {openDialog && (
        <FundingDialog
          type={activeTab}
          onClose={() => setOpenDialog(false)}
        />
      )}
    </div>
  );
};

export default FundingTabs;
