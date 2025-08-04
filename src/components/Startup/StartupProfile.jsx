import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import EditStartupDialog from './EditStartupDialog';
import { PencilIcon } from 'lucide-react';

const InfoItem = ({ label, value }) => (
  <div className="mb-3">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-base font-medium text-gray-900">{value || '-'}</p>
  </div>
);

const SectionCard = ({ title, icon, children }) => (
  <div className="bg-gray-50 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
    {/* <div className="flex items-center mb-4 text-blue-700 font-semibold">
      <span className="mr-2 text-xl">{icon}</span> {title}
    </div> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">{children}</div>
  </div>
);

const StartupProfile = () => {
  const { startup } = useStartup();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        {startup.name}
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <PencilIcon size={16} />
          Edit Info
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Company Details" icon="📌">
          <InfoItem label="Sector" value={startup.sector} />
          <InfoItem label="Industry" value={startup.industry} />
          <InfoItem label="Transaction Type" value={startup.transactionType} />
          <InfoItem label="Registration Type" value={startup.registrationType} />
          <InfoItem label="Email" value={startup.email} />
          <InfoItem label="Phone" value={startup.phone} />
          <InfoItem label="Address" value={startup.address} />
        </SectionCard>

        <SectionCard title="Registration & Certifications" icon="📄">
          <InfoItem label="CIN Number" value={`${startup.cinNo} (${startup.cinDate})`} />
          <InfoItem label="DPIIT Number" value={`${startup.dpitNo} (${startup.dpitDate})`} />
          <InfoItem label="TAN Number" value={startup.tanNo} />
          <InfoItem label="PAN Number" value={startup.panNo} />
        </SectionCard>

        <SectionCard title="Growth Statistics" icon="📈">
          <InfoItem label="Stage" value={startup.stage} />
          <InfoItem label="Revenue" value={`₹${startup.revenue}`} />
          <InfoItem label="Valuation" value={`₹${startup.valuation}`} />
          <InfoItem label="Employees" value={startup.employees} />
          <InfoItem label="Customers" value={startup.customers} />
          <InfoItem
            label="Product Demo URL"
            value={
              <a
                href={startup.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {startup.demoUrl}
              </a>
            }
          />
        </SectionCard>
      </div>

      {open && <EditStartupDialog onClose={() => setOpen(false)} />}
    </div>
  );
};

export default StartupProfile;
