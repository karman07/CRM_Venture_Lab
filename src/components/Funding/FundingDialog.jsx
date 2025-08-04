import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { COLORS } from '../../constants/colors';
import { useFunding } from '../../context/FundingContext';

const FundingDialog = ({ type, item = null, onClose }) => {
  const { addFunding, editFunding } = useFunding();
  const [form, setForm] = useState({ date: '', amount: '', program: '', agency: '' });

  useEffect(() => {
    if (item) setForm(item);
  }, [item]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    item ? editFunding(type, { ...item, ...form }) : addFunding(type, form);
    onClose();
  };

  return (
    <Dialog.Root open onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content className="fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-[400px] shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">
            {item ? 'Edit Funding' : 'Add Funding'}
          </Dialog.Title>

          <div className="space-y-4">
            {['date', 'amount', 'program', 'agency'].map((field) => (
              <input
                key={field}
                name={field}
                value={form[field] || ''}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm text-white rounded"
              style={{ backgroundColor: COLORS.blue }}
            >
              {item ? 'Update' : 'Add'}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FundingDialog;
