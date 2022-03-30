// Get user_id from token:

export const getLoggedInUserId = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  } else {
    const userObject = JSON.parse(window.atob(token.split('.')[1]));
    return userObject.profileId;
  }
};
