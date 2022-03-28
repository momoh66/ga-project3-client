import React from 'react';
import { useState, useEffect } from 'react';
import { getAllProfiles } from '../api/profiles';

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const allProfiles = await getAllProfiles();
      console.log('allProfiles', allProfiles.body);
      setProfiles(allProfiles.body);
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
