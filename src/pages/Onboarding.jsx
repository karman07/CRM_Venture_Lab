import React from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/1.png';
import { COLORS } from '../constants/colors';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo Header */}
      {/* <TopRightImage /> */}

      {/* Content Section */}
      <main className="flex-grow flex items-center justify-center px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Managing Startups <br />
              <span className="text-blue-600">Made Easy</span>
            </h1>
            <p className="text-lg text-gray-700">
              We’re really excited to know you more !!!
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#2563EB] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#1D4ED8] flex items-center gap-2 shadow-md"
            >
              Next <span className="text-xl">→</span>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src={illustration}
              alt="Onboarding Illustration"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
