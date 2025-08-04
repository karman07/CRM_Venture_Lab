import React, { useState } from 'react';
import { useTeam } from '../../context/TeamContext';
import TeamCard from '../TeamCard';
import AddEditTeamDialog from './AddEditTeamDialog';

const TeamList = () => {
  const { team } = useTeam();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const openAddDialog = () => {
    setEditingMember(null);
    setDialogOpen(true);
  };

  const openEditDialog = (member) => {
    setEditingMember(member);
    setDialogOpen(true);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
        <button
          onClick={openAddDialog}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Member
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} onEdit={openEditDialog} />
        ))}
      </div>

      {dialogOpen && (
        <AddEditTeamDialog member={editingMember} onClose={() => setDialogOpen(false)} />
      )}
    </div>
  );
};

export default TeamList;
