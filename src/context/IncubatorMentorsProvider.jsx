import React, { createContext, useContext } from 'react';

const IncubatorMentorsContext = createContext();

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

export const IncubatorMentorsProvider = ({ children }) => {
  return (
    <IncubatorMentorsContext.Provider value={{ mentors }}>
      {children}
    </IncubatorMentorsContext.Provider>
  );
};

export const useIncubatorMentors = () => useContext(IncubatorMentorsContext);
