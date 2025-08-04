import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaEdit, FaTrash } from 'react-icons/fa';
import defaultLogo from '../assets/person_default.png';
import { useTeam } from '../context/TeamContext';

const TeamCard = ({ member, onEdit }) => {
  const { deleteMember } = useTeam();

  return (
    <div className="bg-white rounded-2xl border p-5 flex items-center gap-5 shadow-sm hover:shadow-md transition">
      <img
        src={member.avatar || defaultLogo}
        alt={member.name}
        className="w-16 h-16 rounded-full object-cover border"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultLogo;
        }}
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg font-semibold text-gray-900">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
          <div className="flex gap-2 text-lg text-gray-600">
            <button onClick={() => onEdit(member)} title="Edit">
              <FaEdit className="hover:text-blue-600" />
            </button>
            <button onClick={() => deleteMember(member.id)} title="Delete">
              <FaTrash className="hover:text-red-500" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 mt-3 text-gray-500 text-lg">
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="hover:text-sky-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
