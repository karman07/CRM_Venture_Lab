import axios from 'axios';

const API_BASE = 'https://your-backend-url.com/api';

export const signupUser = async (data) => {
  return await axios.post(`${API_BASE}/signup`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API_BASE}/login`, data);
};
