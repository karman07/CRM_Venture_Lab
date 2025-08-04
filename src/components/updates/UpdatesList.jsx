import React, { useState } from 'react';
import { useUpdates } from '../../context/UpdatesContext';
import AddEditDialog from './AddEditDialog';
import { FiEdit } from 'react-icons/fi';

const UpdatesList = () => {
  const { updates } = useUpdates();
  const [showDialog, setShowDialog] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState(null);

  const openAddDialog = () => {
    setEditingUpdate(null);
    setShowDialog(true);
  };

  const openEditDialog = (update) => {
    setEditingUpdate(update);
    setShowDialog(true);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800"> Updates</h2>
        <button
          onClick={openAddDialog}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
           Add Update
        </button>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all p-5"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold text-gray-800">{update.date}</p>
                <p className="text-sm text-gray-500">{update.title}</p>
              </div>
              <button
                onClick={() => openEditDialog(update)}
                className="text-blue-600 hover:text-blue-800 transition"
                title="Edit"
              >
                <FiEdit size={20} />
              </button>
            </div>
            <p className="text-gray-700 mt-3 text-sm leading-relaxed">{update.text}</p>
          </div>
        ))}
      </div>

      {showDialog && (
        <AddEditDialog
          editingUpdate={editingUpdate}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default UpdatesList;
