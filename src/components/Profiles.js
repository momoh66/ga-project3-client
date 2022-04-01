import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import { getAllProfiles, searchProfile } from '../api/profiles';
import { createPost, deletePost } from '../api/posts';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getLoggedInUserId } from '../lib/auth';

const Profiles = ({ extractDate, extractTime }) => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(null);
  const [posts, setPosts] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [createPostPopup, setCreatePostPopup] = useState(false);
  const [newPostData, setNewPostData] = useState({
    text: '',
    service: '',
    urgency: ''
  });

  const getPostData = async () => {
    const allPosts = await getAllPosts();
    // console.log('allPosts', allPosts);
    setPosts(allPosts);
  };

  useEffect(() => {
    const getProfileData = async () => {
      const allProfiles = await getAllProfiles();
      // console.log('allProfiles', allProfiles.body);
      setProfiles(allProfiles.body);
    };
    getProfileData();
    getPostData();
  }, []);

  const createPostClicked = () => setCreatePostPopup(!createPostPopup);

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

  function handlePostInputChange(e) {
    setNewPostData({ ...newPostData, [e.target.name]: e.target.value });
  }
  async function handleSubmitPost(e) {
    e.preventDefault();
    await createPost(newPostData);
    setNewPostData({ text: '', service: '', urgency: '' });
    setCreatePostPopup(!createPostPopup);
    getPostData();
  }

  async function handleDeletePost(postId) {
    await deletePost(postId);
    getPostData();
  }

  return (
    <section className='feed-and-profiles-section'>
      <div className='search-wrapper'>
        <label htmlFor='search'></label>
        <input
          type='search'
          placeholder='Search service, helper name, city or region...'
          onChange={handleSearchChange}
          value={searchInput}
        />
      </div>
      <div className='feed-and-profiles-container'>
        <div className='feed-section'>
          <h1>News Feed</h1>
          <button className='add-post-button' onClick={createPostClicked}>
            Create New Post
          </button>
          <div className={createPostPopup ? 'add-post-window' : 'hide'}>
            <h1>Create a new Post</h1>
            <FontAwesomeIcon
              className='close-new-post'
              icon={faXmark}
              onClick={createPostClicked}
            />
            <label className='new-post-label' htmlFor='new-post-text'>
              Text*
            </label>
            <textarea
              className='new-post-input'
              name='text'
              id='new-post-text'
              placeholder='What would you like help with?'
              cols='30'
              rows='5'
              value={newPostData.text}
              onChange={handlePostInputChange}
            ></textarea>
            <label className='new-post-label' htmlFor='new-post-service'>
              Service(s) Required*
            </label>
            <input
              className='new-post-input'
              type='text'
              name='service'
              id='new-post-service'
              placeholder='Baby sitting, electronics repair, decorating...'
              value={newPostData.service}
              onChange={handlePostInputChange}
            />
            <label className='new-post-label' htmlFor='new-post-urgency'>
              Urgency
            </label>
            <input
              className='new-post-input'
              type='text'
              name='urgency'
              id='new-post-urgency'
              placeholder='How urgent is your request?'
              value={newPostData.urgency}
              onChange={handlePostInputChange}
            />
            <button
              className={getLoggedInUserId() ? 'submit-new-post' : 'submit-new-post-disallowed'}
              onClick={handleSubmitPost}
            >
              Submit
            </button>
            <p className={!getLoggedInUserId() ? 'logged-in-warning' : 'hide'}>
              You must be{' '}
              <Link className='redirect-page' to={'/login'}>
                logged in
              </Link>{' '}
              to create a post.
            </p>
          </div>
          <div className='feed-container'>
            {!posts ? (
              <p>Loading Feed...</p>
            ) : posts.length === 0 ? (
              <p>No posts in feed yet.</p>
            ) : (
              posts.map((post) => {
                return (
                  <div key={post._id} className='each-post'>
                    <p className='post-creator'>{`${post.createdByName} ${post.createdBySurname}`}</p>
                    {getLoggedInUserId() === post.createdById && (
                      <FontAwesomeIcon
                        className='delete-post'
                        icon={faXmark}
                        onClick={() => handleDeletePost(post._id)}
                      />
                    )}
                    <p className='post-datetime'>{`${extractTime(post.createdAt)}, ${extractDate(
                      post.createdAt
                    )}`}</p>
                    <p className='post-service'>{post.service}</p>
                    <p className='post-text-wrapper'>
                      <span className='quotes'>&ldquo;</span>
                      <br />
                      <span className='post-text'>&emsp;&emsp;&emsp;{post.text}</span>
                      <br />
                      <span className='quotes'>&rdquo;</span>
                    </p>
                    <p className={post.urgency ? 'post-urgency' : 'hide'}>{post.urgency}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className='profiles-section'>
          <h1>All Profiles</h1>
          <div className='profiles-container'>
            {profiles === null ? (
              <p>Loading profiles...</p>
            ) : profiles.length === 0 ? (
              <p>Profile not found</p>
            ) : (
              profiles.map((profile) => {
                return (
                  <div
                    key={profile._id}
                    className='each-profile'
                    onClick={() => navigateToProfile(profile._id)}
                  >
                    <div className='profile-pic-and-name'>
                      <img
                        className='profile-pic'
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
                      <p className='profile-name'>
                        <span>{profile.firstName}</span>
                        <span>{profile.surname}</span>
                      </p>
                    </div>
                    <p className='profile-rating'>
                      Average Rating: <span>{profile.averageRating}</span>
                    </p>
                    <p className='profile-city'>
                      City: <span>{profile.city}</span>
                    </p>
                    <p className='profile-services'>
                      Services: <span>{profile.services}</span>
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <footer id='profiles-footer'>
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin, M. Mohamed
      </footer>
    </section>
  );
};

export default Profiles;
