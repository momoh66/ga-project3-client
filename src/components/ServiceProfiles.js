//! The CSS for this page is governed by services.scss

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchProfile, getProfileById } from '../api/profiles';

const ServiceProfiles = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(null);
  const { state } = useLocation();
  console.log('state', state);

  useEffect(() => {
    const getData = async () => {
      const searchProfiles = await searchProfile(state);
      const returnedProfiles = searchProfiles.body;
      console.log('returnedProfiles 2', returnedProfiles);
      // const userProfile = await getProfileById(returnedProfiles._id);
      setProfiles(returnedProfiles);
    };
    getData();
  }, []);

  const handleClick = (profileId) => {
    navigate(`/single-profile/${profileId}`);
    console.log('profiles', profiles);
  };

  return (
    <section className='services-section'>
      <div className='services-hero'>
        <h1>
          Profiles Offering <span className='heading-service'>{state}</span>
        </h1>
        <p className='instructions'>
          Choose from one of the profiles below to ensure you task gets carried out.
        </p>
        <div className='services-container'>
          {!profiles ? (
            <div className='filtered-profile-card'>Loading Profiles...</div>
          ) : (
            profiles.map((profile) => (
              // <div className='service-border'>
              <div
                key={profile._id}
                className='filtered-profile-card'
                onClick={() => handleClick(profile._id)}
              >
                <img
                  className='profile-pic-filtered'
                  src={profile.imageProfile}
                  alt='profile picture'
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      'https://images.unsplash.com/photo-1530842128367-9e448d986a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
                  }}
                />
                <p>
                  {profile.firstName} {profile.surname}
                </p>
                <p>
                  <span>City:</span>&nbsp;{profile.city}
                </p>
                <p>
                  <span>Average Rating:</span>&nbsp;{profile.averageRating}&nbsp;⭐️
                </p>
              </div>
              // </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceProfiles;
