//! The CSS for this page is governed by services.scss

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchProfile, getProfileById } from '../api/profiles';
const ServiceProfiles = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const { state } = useLocation();
  console.log('state', state);

  useEffect(() => {
    const getData = async () => {
      const searchProfiles = await searchProfile(state);
      const profile = searchProfiles.body[0];
      console.log('id', profile._id);
      const userProfile = await getProfileById(profile._id);
      console.log('data.body:', userProfile.body);
      setProfile(userProfile.body);
    };
    getData();
  }, []);
  const handleClick = () => {
    navigate(`/single-profile/${profile._id}`);

    console.log('profile', profile);
  };

  return (
    <section className="services-section">
      <div className="services-hero">
        <h1>Profiles Offering this service</h1>
        <p className="instructions">
          Choose from one of the profiles below to ensure you task gets carried
          out.
        </p>
        <div className="services-container">
          <div className="service-border">
            <div className="service-card">
              {' '}
              {!profile ? (
                <div className="service-card">Loading Profiles...</div>
              ) : (
                <div className="service-card" onClick={handleClick}><img src= {profile.imageProfile}alt='profile' />
                  {profile.firstName} {profile.surname} Average Rating{' '}
                  {profile.averageRating}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProfiles;
