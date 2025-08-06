import React from 'react';
import { Dialog } from '@headlessui/react';

const ProgramDetailsModal = ({ isOpen, onClose, program }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg space-y-4">
          <Dialog.Title className="text-xl font-semibold">
            {program?.title}
          </Dialog.Title>
          <p className="text-gray-700">{program?.description}</p>
          <div className="text-sm text-gray-500">
            Last Date to Apply: {program?.lastDate}
          </div>
          <div className="text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProgramDetailsModal;
