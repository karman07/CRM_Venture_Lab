import React, { createContext, useContext } from 'react';

const IncubatorTeamMemberContext = createContext();

export const useTeamMembers = () => useContext(IncubatorTeamMemberContext);

export const IncubatorTeamMemberProvider = ({ children }) => {
  const members = [
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
    },
    // Add more members here
  ];

  return (
    <IncubatorTeamMemberContext.Provider value={{ members }}>
      {children}
    </IncubatorTeamMemberContext.Provider>
  );
};
