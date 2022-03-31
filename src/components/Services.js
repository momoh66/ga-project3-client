import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchProfile, getAllProfiles } from '../api/profiles';
import { Link } from 'react-router-dom';

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
    const returnedProfiles = await searchProfile(clickedButton);
    console.log('returnedProfiles', returnedProfiles);
    const id = returnedProfiles.body[0]._id;
    navigate(`/services/profiles`, { state: clickedButton });
    console.log('searchProfile id', returnedProfiles.body[0]._id);
  };

  function getUniqueServices() {
    const uniqueArray = [...new Set(profiles.map((profile) => profile.services[0]))];
    console.log('uniqueArray', uniqueArray);
    return uniqueArray;
  }

  return (
    <section className='services-section'>
      <div className='services-hero'>
        <h1>Services</h1>
        <p className='instructions'>
          Choose from one of the services below to start browsing different personnel who can carry
          that specific service for you! Don't forget, you can also search through all services,
          helpers or cities via the{' '}
          <Link className='redirect-to-profiles' to={'/profiles'}>
            Feed/Profile
          </Link>{' '}
          section!
        </p>
        <div className='services-container'>
          {!profiles ? (
            <p>Loading Services...</p>
          ) : (
            getUniqueServices().map((service) => (
              <div key={service} className='service-border'>
                <div key={service} className='service-card' onClick={handleClick}>
                  {service}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
