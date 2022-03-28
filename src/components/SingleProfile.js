import React from 'react';
import { useState, useEffect } from 'react';
import { searchProfile } from '../api/profiles';

const SingleProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const profile = await searchProfile('painting');
      // console.log('data', profile.body[0]);
      setProfile(profile.body[0]);
    };
    getData();
  }, []);

  console.log('profile', profile);

  return (
    <section>
      <h1>Single Profile Page</h1>
    </section>
  );
};

export default SingleProfile;
