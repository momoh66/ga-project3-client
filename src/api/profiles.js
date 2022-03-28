import 'regenerator-runtime/runtime.js';
import axios from 'axios';

export const getAllProfiles = async () => {
  const options = {
    method: 'GET',
    url: '/api/profiles'
  };

  const { data } = await axios.request(options);
  console.log('data', data);

  return data;
};

export const searchProfile = async (searchTerm) => {
  const options = {
    method: 'GET',
    url: `/api/profiles/${searchTerm}`
  };

  const { data } = await axios.request(options);
  return data;
};

export const updateProfile = async (profileId, updatedBody) => {
  const options = {
    method: 'PUT',
    url: `/api/profiles/${profileId}`,
    data: updatedBody,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

// export const deleteProfile = async () => {
//   const options = {
//     method: 'DELETE',
//     url: `/api/profiles/${profileId}`,
//     data: updatedBody,
//     headers: {
//       authorization: `Bearer ${window.sessionStorage.getItem('token')}`
//     }
//   };

//   const { data } = await axios.request(options);
//   return data;
// };
