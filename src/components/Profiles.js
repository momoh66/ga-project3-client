import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import { getAllProfiles } from '../api/profiles';
import { searchProfile } from '../api/profiles';

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);
  const [posts, setPosts] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getProfileData = async () => {
      const allProfiles = await getAllProfiles();
      console.log('allProfiles', allProfiles.body);
      setProfiles(allProfiles.body);
    };
    const getPostData = async () => {
      const allPosts = await getAllPosts();
      console.log('allPosts', allPosts);
      setPosts(allPosts);
    };
    const getSearchProfile = async () => {
      const searchingProfile = await searchProfile(searchInput);
      console.log('searchingProfile', searchingProfile);
      setProfiles(searchingProfile);
    };
    getProfileData();
    getPostData();
    getSearchProfile();
  }, []);

  // console.log('profiles', profiles);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    profiles.filter((profile) => {
      return profile.service.match(searchInput);
    });
  }

  if (!posts) {
    return <p>Loading...</p>;
  }
  if (!profiles) {
    return <p>Loading...</p>;
  }

  return (
    <section className="profiles-section">
      <div className="search-wrapper">
        <label htmlFor="search">Search Users</label>
        <input
          type="search"
          placeHolder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div className="overall-wrapper">
        <div className="middle-section">
          <div className="feed-section">
            <h1>Feed Section</h1>
            <div className="feed-container">
              {posts.map((posts) => {
                return (
                  <div key={posts._id} className="each-post">
                    <p>{posts.text}</p>
                    <p>{posts.service}</p>
                    <p>{posts.urgency}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="profile-section">
            <h1>Profile Section</h1>
            <div className="profile-container">
              {/* {profiles.map((profiles) => {
                return (
                  <div key={profiles._id} className="each-profile">
                    <p>{`${profiles.firstName} ${profiles.surname}`}</p>{' '}
                    <p>{`Rating: ${profiles.averageRating}`}</p>{' '}
                    <p>{`City: ${profiles.city}`}</p>{' '}
                    <p>{`Services: ${profiles.services}`}</p>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
