import 'regenerator-runtime/runtime.js';
import axios from 'axios';

// ! -------------------- PROFILES -------------------- ! //

export const getAllProfiles = async () => {
  const options = {
    method: 'GET',
    url: '/api/profiles'
  };
  const { data } = await axios.request(options);
  console.log('data', data);
  return data;
};

export const getProfileById = async (id) => {
  const options = {
    method: 'GET',
    url: `/api/single-profile/${id}`
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

// ! -------------------- COMMENTS -------------------- ! //

export const createComment = async (profileId, commentBody) => {
  const options = {
    method: 'POST',
    url: `/api/profile/${profileId}/comments`,
    data: commentBody,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const { data } = await axios.request(options);
  return data;
};

// UPDATE comment
export const updateComment = async (profileId, commentId, commentBody) => {
  const options = {
    method: 'PUT',
    url: `/api/profile/${profileId}/comments/${commentId}`,
    data: commentBody,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const { data } = await axios.request(options);
  return data;
};

// DELETE comment
export const deleteComment = async (profileId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/profile/${profileId}/comments/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };
  const { data } = await axios.request(options);
  return data;
};
