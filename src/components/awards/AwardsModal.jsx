import React, { useEffect, useState } from 'react';
import { useAwards } from '../../context/AwardsContext';

const AwardsModal = () => {
  const { isModalOpen, closeModal, selectedAward, addOrUpdateAward } = useAwards();
  const [form, setForm] = useState({
    name: '',
    date: '',
    organization: '',
    categories: '',
    description: '',
  });

  useEffect(() => {
    if (selectedAward) setForm(selectedAward);
    else setForm({ name: '', date: '', organization: '', categories: '', description: '' });
  }, [selectedAward]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateAward({ ...form, id: selectedAward?.id || Date.now() });
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">{selectedAward ? 'Edit Award' : 'Add Award'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="date"
            placeholder="Date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="organization"
            placeholder="Organization"
            value={form.organization}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="categories"
            placeholder="Categories"
            value={form.categories}
            onChange={handleChange}
          />
          <textarea
            className="w-full p-2 border rounded"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={closeModal} className="bg-gray-200 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {selectedAward ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AwardsModal;
