import React, { useState } from 'react';
import { useIPContext } from '../../context/IPContext';
import EditDialog from './EditDialog';
import DeleteDialog from './DeleteDialog';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // ✅ React Icons

const IPTable = () => {
  const { ips } = useIPContext();
  const [editingIP, setEditingIP] = useState(null);
  const [deletingIP, setDeletingIP] = useState(null);

  return (
    <div className="p-4">
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full table-auto bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">IP Type</th>
              <th className="p-3 text-left">IP Number</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">IP Status</th>
              <th className="p-3 text-left">IP Status Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ips.map((ip) => (
              <tr key={ip.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{ip.type}</td>
                <td className="p-3">{ip.number}</td>
                <td className="p-3">{ip.description}</td>
                <td className="p-3">{ip.status}</td>
                <td className="p-3">{ip.date}</td>
                <td className="p-3 flex gap-3 items-center">
                  <button
                    onClick={() => setEditingIP(ip)}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Edit"
                  >
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => setDeletingIP(ip)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {editingIP && <EditDialog ip={editingIP} onClose={() => setEditingIP(null)} />}
      {deletingIP && <DeleteDialog ip={deletingIP} onClose={() => setDeletingIP(null)} />}
    </div>
  );
};

export default IPTable;
