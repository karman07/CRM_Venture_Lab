import React, { useState } from 'react';
import { useIPContext } from '../../context/IPContext';

const EditDialog = ({ ip, onClose }) => {
  const { updateIP } = useIPContext();
  const [form, setForm] = useState(ip);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateIP(ip.id, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit IP</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="input" name="type" value={form.type} onChange={handleChange} placeholder="Type" />
          <input className="input" name="number" value={form.number} onChange={handleChange} placeholder="Number" />
          <input className="input" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
          <input className="input" name="status" value={form.status} onChange={handleChange} placeholder="Status" />
          <input className="input" name="date" value={form.date} onChange={handleChange} placeholder="Date" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDialog;
