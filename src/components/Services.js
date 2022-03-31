import React from 'react';
import { useNavigate } from 'react-router-dom';
import { searchProfile, getAllProfiles } from '../api/profiles';
const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const allProfiles = await getAllProfiles();
      console.log('allProfiles', allProfiles.body);
    };
  });
  const handleClick = async (e) => {
    e.preventDefault();
    const clickedLink = e.target.value;
    await searchProfile(margery);
    console.log('clickedLink', clickedLink);
    // navigate(`/${clickedLink}`);
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
            {getData.map((profile) => (
              <button className="service-card" onClick={handleClick}>
                profile.services
              </button>
            )) 
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
