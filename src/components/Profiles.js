import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import { getAllProfiles } from '../api/profiles';

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      const allProfiles = await getAllProfiles();
      console.log('allProfiles', allProfiles.body);
      setProfiles(allProfiles.body);
    };
    const getPostData = async () => {
      const allPosts = await getAllPosts();
      console.log('allPosts', allPosts);
    };
    getProfileData();
    getPostData();
  }, []);

  // console.log('profiles', profiles);

  return (
    <section>
      <h1>Profiles Page</h1>
    </section>
  );
};

export default Profiles;
