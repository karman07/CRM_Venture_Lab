import React from 'react';
import image from '../../assets/logo.png'; // Make sure path is correct

const TopRightImage = () => (
  <header className="w-full flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200 bg-white shadow-sm">
    <img
      src={image}
      alt="Venture Lab Logo"
      className="h-10 md:h-12 object-contain"
    />
  </header>
);

export default TopRightImage;
