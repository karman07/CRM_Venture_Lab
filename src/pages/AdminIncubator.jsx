import { useAdminIncubator } from '../context/AdminIncubatorContext';
import TeamCard from '../components/TeamCard';
import MainLayout from '../layout/Layout';
import StartUpLayout from '../layout/Startup';
import IncubatorMainLayout from '../layout/IncubatorMainLayout';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const AdminIncubatorPage = () => {
  const { mentors } = useAdminIncubator();

  return (
     <MainLayout>
        <IncubatorMainLayout>
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Our Admins</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((member, index) => (
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
    </IncubatorMainLayout>
    </MainLayout>
  );
};

export default AdminIncubatorPage;
