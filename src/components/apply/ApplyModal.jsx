import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ApplyModal = ({ isOpen, onClose, program }) => {
  const [formData, setFormData] = useState({
    funding: '',
    product: '',
    impact: '',
  });

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleApply = () => {
    console.log('Form Submitted:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg space-y-4">
          <Dialog.Title className="text-xl font-semibold">
            Apply for {program?.title}
          </Dialog.Title>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Startup Funding</label>
              <input
                name="funding"
                value={formData.funding}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="Enter the funding"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Product</label>
              <input
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="Describe your product"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Impact</label>
              <textarea
                name="impact"
                value={formData.impact}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="Impact in upcoming years"
              />
            </div>
          </div>

          <div className="text-right space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ApplyModal;
