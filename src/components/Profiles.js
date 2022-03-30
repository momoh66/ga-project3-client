import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import { getAllProfiles } from '../api/profiles';
import { searchProfile } from '../api/profiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Profiles = ({ extractDate, extractTime }) => {
  const navigate = useNavigate();
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
    // const getSearchProfile = async () => {
    //   const searchingProfile = await searchProfile(searchInput);
    //   console.log('searchingProfile', searchingProfile);
    //   setProfiles(searchingProfile);
    // };
    getProfileData();
    getPostData();
    // getSearchProfile();
  }, []);

  // console.log('profiles', profiles);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // if (searchInput.length > 0) {
  //   profiles.filter((profile) => {
  //     return profile.service.match(searchInput);
  //   });
  // }

  function navigateToProfile(id) {
    // console.log('e.target', e.target);
    // console.log('profile id?', id);
    navigate(`/single-profile/${id}`);
  }

  if (!posts) {
    return <p>Loading...</p>;
  }
  if (!profiles || profiles.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className='feed-and-profiles-section'>
      <div className='search-wrapper'>
        <label htmlFor='search'></label>
        <input
          type='search'
          placeholder='Search service, helper name, city or region...'
          onChange={handleChange}
          value={searchInput}
        />
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className='feed-and-profiles-container'>
        <div className='feed-section'>
          <h1>News Feed</h1>
          <div className='feed-container'>
            {posts.map((post) => {
              return (
                <div key={post._id} className='each-post'>
                  <p className='post-creator'>{`${post.createdByName} ${post.createdBySurname}`}</p>
                  <p className='post-datetime'>{`${extractTime(post.createdAt)}, ${extractDate(
                    post.createdAt
                  )}`}</p>
                  <p className='post-service'>{post.service}</p>
                  <p className='post-text-wrapper'>
                    <span>&ldquo;</span>
                    <br />
                    <p className='post-text'>&emsp;&emsp;&emsp;{post.text}</p>
                    <br />
                    <span>&rdquo;</span>
                  </p>
                  <p className={post.urgency ? 'post-urgency' : 'hide'}>
                    {/* <span>Urgency:</span>&nbsp; */}
                    {post.urgency}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='profiles-section'>
          <h1>All Profiles</h1>
          <div className='profiles-container'>
            {profiles.map((profile) => {
              return (
                <div
                  key={profile._id}
                  className='each-profile'
                  onClick={() => navigateToProfile(profile._id)}
                >
                  <p className='profile-name'>{`${profile.firstName} ${profile.surname}`}</p>
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
