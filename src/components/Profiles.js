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
    <section className="profiles-section">
      <div className="overall-wrapper">
        <div>
          <div className="search-wrapper">
            <label htmlFor="search">Search Users</label>
            <input type="search" id="search" />
          </div>
          <div className="middle-section">
            <div className="feed-section">
              <div className="feed-container">
                <h1>Feed Section</h1>
              </div>
            </div>
            <div className="profile-section">
              <div className="profile-container">
                <h1>Profile Section</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
