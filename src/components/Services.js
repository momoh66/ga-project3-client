import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchProfile, getAllProfiles } from '../api/profiles';
const Services = () => {
  const [profiles, setProfiles] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const allProfiles = await getAllProfiles();
      console.log('allProfiles', allProfiles.body);
      setProfiles(allProfiles.body);
    };
    getData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const clickedButton = e.target.innerHTML;
    const searchProfiles = await searchProfile(clickedButton);
    navigate(`/single-profile/${id}`);
    const id = searchProfiles.body[0]._id;
    console.log('searchProfile(clickedButton)', searchProfiles.body[0]._id);
  };

  return (
    <section className="services-section">
      <div className="services-hero">
        <h1>Services</h1>
        <p className="instructions">
          Choose from one of the services below to start browsing different
          personnel who can carry that specific service for you.
        </p>
        <div className="services-container">
          <div className="service-border">
            {!profiles ? (
              <p>Loading Services...</p>
            ) : (
              profiles.map((profile) => (
                <button
                  key={profile._id}
                  className="service-card"
                  onClick={handleClick}
                >
                  {profile.services}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
