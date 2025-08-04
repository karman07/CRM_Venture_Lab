import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import FundingDialog from './FundingDialog';
import DeleteDialog from './DeleteDialog';
import { COLORS } from '../../constants/colors';

const FundingTable = ({ type, data = [] }) => {
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm border rounded">
        <thead style={{ backgroundColor: COLORS.background }}>
          <tr className="text-left border-b" style={{ borderColor: COLORS.border }}>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Funding Program</th>
            <th className="p-3">Funding Agency</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((f) => (
            <tr key={f.id} className="border-b hover:bg-gray-50" style={{ borderColor: COLORS.border }}>
              <td className="p-3">{f.date}</td>
              <td className="p-3">{f.amount}</td>
              <td className="p-3">{f.program}</td>
              <td className="p-3">{f.agency}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => setEditItem(f)}><Pencil size={16} /></button>
                <button onClick={() => setDeleteId(f.id)}><Trash2 size={16} className="text-red-500" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editItem && <FundingDialog type={type} item={editItem} onClose={() => setEditItem(null)} />}
      {deleteId && <DeleteDialog type={type} id={deleteId} onClose={() => setDeleteId(null)} />}
    </div>
  );
};

export default FundingTable;
