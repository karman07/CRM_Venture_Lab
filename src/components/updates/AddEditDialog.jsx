import React, { useState, useEffect } from 'react';
import { useUpdates } from '../../context/UpdatesContext';

const AddEditDialog = ({ onClose, editingUpdate = null }) => {
  const { addUpdate, updateUpdate } = useUpdates();
  const [form, setForm] = useState({
    date: '',
    title: '',
    text: '',
  });

  useEffect(() => {
    if (editingUpdate) setForm(editingUpdate);
  }, [editingUpdate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUpdate ? updateUpdate(editingUpdate.id, form) : addUpdate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {editingUpdate ? ' Edit Update' : ' Add Update'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
            <input
              type="text"
              name="date"
              placeholder="e.g. Jan 2024"
              value={form.date}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="text"
              rows="4"
              placeholder="Description"
              value={form.text}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingUpdate ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditDialog;
