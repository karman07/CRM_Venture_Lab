import axios from 'axios';

export const fetchUser = async () => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { name: 'Startup User', onboarded: true } });
    }, 1000);
  });
};
