import React, { createContext, useContext } from 'react';

const AdminIncubatorContext = createContext();

const mentors = [
    {
      name: 'Kanishk Dadwal',
      phone: '+91 9690602545',
      email: 'kanishkdadwal@gmail.com',
      image: 'https://i.pravatar.cc/150?img=32',
      social: {
        linkedin: 'https://linkedin.com/in/kanishk',
        instagram: 'https://instagram.com/kanishk',
        twitter: 'https://twitter.com/kanishk',
      },
    }
];

export const AdminIncubatorProvider = ({ children }) => {
  return (
    <AdminIncubatorContext.Provider value={{ mentors }}>
      {children}
    </AdminIncubatorContext.Provider>
  );
};

export const useAdminIncubator = () => useContext(AdminIncubatorContext);
