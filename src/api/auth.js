import 'regenerator-runtime/runtime.js';
import axios from 'axios';

export const loginUser = async (credentials) => {
  console.log('credentials', credentials);
  const options = {
    method: 'POST',
    url: '/api/login',
    data: credentials
  };

  const { data } = await axios.request(options);
  console.log('data', data);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  return data.message;
};

export const registerUser = async(user) => {
    const options = {
    method: 'POST',
    url: '/api/register',
    data: user
  };

  const { data } = await axios.request(options);

  return data;

}