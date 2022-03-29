import React from 'react';
import { useState, useEffect } from 'react';
import { searchProfile } from '../api/profiles';

const SingleProfile = () => {
  // const [profile, setProfile] = useState(null);
  const [profile, setProfile] = useState({ firstName: 'prerender' });

  useEffect(() => {
    const getData = async () => {
      const userProfile = await searchProfile('interior');
      console.log('userProfile.body[0]', userProfile.body[0]);
      setProfile(userProfile.body[0]);
    };
    getData();
  }, []);

  console.log('profile', profile.firstName);
  // console.log('profilefirstName', profile.body);

  return (
    <section className='singleProfile-section'>
      <div>
        {!profile ? (
          <p>Loading profile...</p>
        ) : (
          <h1>{`${profile.firstName} ${profile.surname}`}</h1>
        )}
      </div>
    </section>
  );
};

export default SingleProfile;
