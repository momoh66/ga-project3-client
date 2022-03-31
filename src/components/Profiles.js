import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import { createPosts } from '../api/posts';
import { getAllProfiles } from '../api/profiles';
import { searchProfile } from '../api/profiles';
import { useNavigate } from 'react-router-dom';

const Profiles = ({ extractDate, extractTime }) => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(null);
  const [posts, setPosts] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [newPost, setNewPost] = useState(null);

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
    const createNewPost = async () => {
      const creatingPosts = await createPosts();
      console.log('creatingPosts', creatingPosts);
      setNewPost(creatingPosts.body);
    };
    getProfileData();
    getPostData();
    createNewPost();
  }, []);

  const filterProfiles = async () => {
    console.log('searchingProfile...');
    const filteredProfiles = await searchProfile(searchInput);
    setProfiles(filteredProfiles.body);
  };

  function handleSearchChange(e) {
    console.log(e.target.value);
    setSearchInput(e.target.value);
    filterProfiles(searchInput);
  }

  function navigateToProfile(id) {
    navigate(`/single-profile/${id}`);
  }

  return (
    <section className="feed-and-profiles-section">
      <div className="search-wrapper">
        <label htmlFor="search"></label>
        <input
          type="search"
          placeholder="Search service, helper name, city or region..."
          onChange={handleSearchChange}
          value={searchInput}
        />
      </div>
      <div className="feed-and-profiles-container">
        <div className="feed-section">
          <h1>News Feed</h1>
          <div className="feed-container">
            {!posts ? (
              <p>Loading Feed...</p>
            ) : posts.length === 0 ? (
              <p>No posts in feed yet.</p>
            ) : (
              posts.map((post) => {
                return (
                  <div key={post._id} className="each-post">
                    <p className="post-creator">{`${post.createdByName} ${post.createdBySurname}`}</p>
                    <p className="post-datetime">{`${extractTime(
                      post.createdAt
                    )}, ${extractDate(post.createdAt)}`}</p>
                    <p className="post-service">{post.service}</p>
                    <p className="post-text-wrapper">
                      <span className="quotes">&ldquo;</span>
                      <br />
                      <span className="post-text">
                        &emsp;&emsp;&emsp;{post.text}
                      </span>
                      <br />
                      <span className="quotes">&rdquo;</span>
                    </p>
                    <p className={post.urgency ? 'post-urgency' : 'hide'}>
                      {post.urgency}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="profiles-section">
          <h1>All Profiles</h1>
          <div className="profiles-container">
            {profiles === null ? (
              <p>Loading profiles...</p>
            ) : profiles.length === 0 ? (
              <p>Profile not found</p>
            ) : (
              profiles.map((profile) => {
                return (
                  <div
                    key={profile._id}
                    className="each-profile"
                    onClick={() => navigateToProfile(profile._id)}
                  >
                    <div className="profile-pic-and-name">
                      <img
                        className="profile-pic"
                        src={profile.imageProfile}

                        alt='profile picture'
                        width='70px'
                        height='70px'
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            'https://images.unsplash.com/photo-1530842128367-9e448d986a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
                        }}
                      />
                      <p className="profile-name">
                        <span>{profile.firstName}</span>
                        <span>{profile.surname}</span>
                      </p>
                    </div>
                    <p className="profile-rating">
                      Average Rating: <span>{profile.averageRating}</span>
                    </p>
                    <p className="profile-city">
                      City: <span>{profile.city}</span>
                    </p>
                    <p className="profile-services">
                      Services: <span>{profile.services}</span>
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <footer id="profiles-footer">
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin,
        M. Mohamed
      </footer>
    </section>
  );
};

export default Profiles;
