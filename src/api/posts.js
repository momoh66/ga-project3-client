import 'regenerator-runtime/runtime.js';
import axios from 'axios';

export const getAllPosts = async () => {
  const options = {
    method: 'GET',
    url: '/api/posts'
  };
  const { data } = await axios.request(options);
  return data;
};

// ! --------------------------------------------------- ! //
// ! ------ STRETCH GOALS - test these at the end ------ ! //
// ! --------------------------------------------------- ! //

export const createPosts = async () => {
  const options = {
    method: 'POST',
    url: '/api/posts',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

export const updatePosts = async (postId, postBody) => {
  const options = {
    method: 'PUT',
    url: `/api/posts/${postId}`,
    data: postBody,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};

export const deletePosts = async (postId) => {
  const options = {
    method: 'DELETE',
    url: `/api/posts/${postId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  return data;
};
// ! ------------------------------------------------ ! //
// ! ------------------------------------------------ ! //
// ! ------------------------------------------------ ! //
