import React from 'react';
import { useState, useEffect } from 'react';
import { getAllProfiles } from '../api/profiles';

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const allProfiles = getAllProfiles();
      console.log('allProfiles', allProfiles);
      setProfiles(allProfiles);
    };
    getData();
  }, []);

  // console.log('profiles', profiles);

  return (
    <section>
      <h1>Profiles Page</h1>
    </section>
  );
};

export default Profiles;
