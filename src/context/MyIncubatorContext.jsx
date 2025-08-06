import React, { createContext, useContext } from "react";
import Image2 from "../assets/logo.png";
const myIncubatorContext = createContext([]);

export const usemyIncubators = () => useContext(myIncubatorContext);

export const MyIncubatorProvider = ({ children }) => {
  const myIncubators = [
    { name: "SRM IAIC", joiningDate: "08/12/2021", logoUrl: Image2 },
    { name: "Venture Lab", joiningDate: "06/12/2021", logoUrl: Image2 },
    { name: "Venture Lab", joiningDate: "08/12/2021", logoUrl: Image2 },
    { name: "Venture Lab", joiningDate: "06/12/2021", logoUrl: Image2 },
  ];

  return (
    <myIncubatorContext.Provider value={myIncubators}>
      {children}
    </myIncubatorContext.Provider>
  );
};
