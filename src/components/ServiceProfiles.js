//! The CSS for this page is governed by services.scss

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfileById } from '../api/profiles';
const ServiceProfiles = () => {
  const [profile, setProfile] = useState(null);
  // const navigate = useNavigate();
useEffect(() => {
  const getData = async () => {
    const userProfile = await getProfileById();
    console.log('data.body:', userProfile.body);
    setProfile(userProfile.body);
  };
  getData();
}, []);

  
  

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
            <div className="service-card">{profile}</div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProfiles;
