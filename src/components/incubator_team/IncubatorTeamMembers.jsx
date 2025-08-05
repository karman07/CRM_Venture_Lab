import React from 'react';
import { useTeamMembers } from '../../context/IncubatorTeamMemberContext';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamMembers = () => {
  const { members } = useTeamMembers();

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Team</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.role || 'Team Member'}</p>

              <div className="mt-4 space-y-1 text-gray-600 text-sm">
                <p><span className="font-medium">Phone:</span> {member.phone}</p>
                <p><span className="font-medium">Email:</span> {member.email}</p>
              </div>

              <div className="mt-4 flex justify-center gap-4 text-lg text-blue-600">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-800">
                    <FaLinkedin />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-500">
                    <FaInstagram />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noreferrer" className="hover:text-sky-500">
                    <FaTwitter />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
