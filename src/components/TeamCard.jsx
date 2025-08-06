import { FaLinkedin, FaInstagram, FaTwitter, FaEdit, FaTrash } from 'react-icons/fa';
import defaultLogo from '../assets/person_default.png';
import { useTeam } from '../context/TeamContext';

const TeamCard = ({ avatar, name, role, id, onEdit, social = {}, phone, email }) => {
  const { deleteMember } = useTeam();

  return (
    <div className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col items-center text-center relative">
        {/* Edit & Delete Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 text-gray-500">
          <button onClick={() => onEdit?.({ avatar, name, role, id })} title="Edit">
            <FaEdit className="hover:text-blue-600 cursor-pointer" />
          </button>
          <button onClick={() => deleteMember(id)} title="Delete">
            <FaTrash className="hover:text-red-500 cursor-pointer" />
          </button>
        </div>

        {/* Avatar */}
        <img
          src={avatar || defaultLogo}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultLogo;
          }}
        />

        {/* Name & Role */}
        {console.log('Rendering TeamCard for:', name)}
        <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{role || 'Team Member'}</p>

        {/* Contact Info */}
        {(phone || email) && (
          <div className="mt-4 space-y-1 text-gray-600 text-sm">
            {phone && <p><span className="font-medium">Phone:</span> {phone}</p>}
            {email && <p><span className="font-medium">Email:</span> {email}</p>}
          </div>
        )}

        {/* Social Icons */}
        <div className="mt-4 flex justify-center gap-4 text-lg text-blue-600">
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-800">
              <FaLinkedin />
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noreferrer" className="hover:text-sky-500">
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
