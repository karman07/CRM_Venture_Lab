import React, { useState } from 'react';
import logo from '../assets/logo.png';
import startupImg from '../assets/1.png';
import incubatorImg from '../assets/1.png';
import { signupUser } from '../api/auth';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'incubator',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form);
      alert('Signed up successfully!');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 max-w-md space-y-6 mb-10 lg:mb-0 lg:mr-12">
        <img src={logo} alt="logo" className="w-36" />
        <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">Let's get you started!</h2>
        <p className="text-blue-600 font-semibold text-lg">Are you a Startup or Incubator?</p>

        <div className="space-y-4">
          {['startup', 'incubator'].map((role) => (
            <div
              key={role}
              className={`flex items-center justify-between border rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                form.role === role ? 'border-2 border-blue-600 bg-blue-50' : 'border-gray-300 bg-white'
              }`}
              onClick={() => setForm({ ...form, role })}
            >
              <div className="flex items-center gap-4">
                <img
                  src={role === 'startup' ? startupImg : incubatorImg}
                  alt={role}
                  className="w-12 h-12 object-contain"
                />
                <p className="text-lg font-semibold text-gray-800">
                  {role === 'startup' ? 'We’re a Startup!' : 'We are an Incubator!'}
                </p>
              </div>
              <input type="radio" checked={form.role === role} readOnly />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Log In
          </Link>
        </p>
      </div>

      {/* Right Section - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-blue-600 rounded-xl shadow-md px-8 py-10 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-gray-900">Sign Up</h2>
        <p className="text-blue-600 font-medium text-sm">Get started with your amazing journey!</p>

        {[
          { label: 'First Name', placeholder: 'Enter your first name' },
          { label: 'Last Name', placeholder: 'Enter your last name' },
          { label: 'Email', placeholder: 'xyz@example.com' },
          { label: 'Password', placeholder: 'Enter your password' },
          { label: 'Confirm Password', placeholder: 'Re-enter your password' },
        ].map(({ label, placeholder }) => {
          const name = label.toLowerCase().replace(/\s/g, '');
          return (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={name.includes('password') ? 'password' : 'text'}
                name={name}
                value={form[name]}
                onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                required
              />
            </div>
          );
        })}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
