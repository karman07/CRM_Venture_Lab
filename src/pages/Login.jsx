import React, { useState } from 'react';
import logo from '../assets/logo.png';
import loginImage from '../assets/2.png';
import { loginUser } from '../api/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      alert('Logged in!');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 sm:p-10 animate-fade-in-down">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back <span className="inline-block">👋</span></h1>
            <p className="text-blue-600 mb-6 font-medium text-sm">Log in to continue your journey!</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@domain.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm placeholder-gray-400"
                  required
                />
              </div>

              {/* Sign up prompt */}
              <div className="text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link
                  to="/signup"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  Sign Up
                </Link>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-900 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition duration-200"
              >
                Log In
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center">
            <img
              src={loginImage}
              alt="Login illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
