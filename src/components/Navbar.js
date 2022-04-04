import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';
import { getProfileById } from '../api/profiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faHeart,
  faTree,
  faPeopleRoof,
  faCrown,
  faUserLock,
  faChildReaching,
  faSignOut,
  faXmark,
  faCircleUser
} from '@fortawesome/free-solid-svg-icons';
import treeImg from '../images/tree.png';

const Navbar = () => {
  let location = useLocation();
  const id = getLoggedInUserId();
  const [sideBar, setSideBar] = useState(false);
  const [onPage, setOnPage] = useState(location.pathname);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState('');
  function checkUserLoggedIn() {
    const token = sessionStorage.getItem('token');
    if (!token) return false;
  }

  function logOutUser() {
    sessionStorage.removeItem('token');
  }

  useEffect(() => {
    setOnPage(location.pathname);
    setLoggedIn(checkUserLoggedIn);
    const getData = async () => {
      if (getLoggedInUserId()) {
        const userProfile = await getProfileById(id);
        // console.log('data.body:', userProfile.body);
        setProfile(userProfile.body);
      }
    };
    getData();
  }, [location, id]);

  const toggleMenu = () => setSideBar(!sideBar);

  return (
    <header>
      <div className='navbar'>
        <Link to={'/'} className='navbar-item logo'>
          <img src={treeImg} alt='tree logo' className='treelogo' />
          <p className='neighbour-needs-logo-text'>Neighbour Needs</p>
        </Link>

        <div className='navbar-right'>
          {getLoggedInUserId() && (
            <>
              {' '}
              <p className='welcome-banner'>
                <span>Welcome home</span>
                <span>{`${profile.firstName} ${profile.surname}!`}</span>
              </p>
              <Link to={`/single-profile/${id}`} className='navbar-item user-icon'>
                <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </>
          )}
          {!sideBar ? (
            <Link to={'#'} className='navbar-item bars' onClick={toggleMenu}>
              <div className='bar bar1'></div>
              <div className='bar bar2'></div>
              <div className='bar bar3'></div>
            </Link>
          ) : (
            <Link to={'#'} className='navbar-item xMark' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          )}
        </div>
      </div>
      <nav className={sideBar ? 'sidebar active' : 'sidebar'} onClick={toggleMenu}>
        <Link to={'/'} className={onPage === '/' ? 'sidebar-item on-page' : 'sidebar-item'}>
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <Link
          to={'/about'}
          className={onPage === '/about' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faHeart} />
          About
        </Link>
        <Link
          to={'/profiles'}
          className={onPage === '/profiles' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faPeopleRoof} />
          Feed / Profiles
        </Link>
        <Link
          to={'/neighbourhoods'}
          className={onPage === '/neighbourhoods' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faTree} />
          Neighbourhoods
        </Link>
        <Link
          to={'/services'}
          className={onPage === '/services' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faCrown} />
          Services
        </Link>
        {loggedIn === false ? (
          <>
            <Link
              to={'/register'}
              className={onPage === '/register' ? 'sidebar-item on-page' : 'sidebar-item'}
            >
              <FontAwesomeIcon icon={faChildReaching} />
              Register
            </Link>
            <Link
              to={'/login'}
              className={onPage === '/login' ? 'sidebar-item on-page' : 'sidebar-item'}
            >
              <FontAwesomeIcon icon={faUserLock} />
              Log In
            </Link>
          </>
        ) : (
          <Link
            to={'/login'}
            className={onPage === '/logout' ? 'sidebar-item on-page' : 'sidebar-item'}
            onClick={logOutUser}
          >
            <FontAwesomeIcon icon={faSignOut} />
            Logout
          </Link>
        )}
        {/* {!checkUserLoggedIn() && <Link
          to={'/login'}
          className={
            onPage === '/logout' ? 'sidebar-item on-page' : 'sidebar-item'
          }
          onClick={logOutUser}
        >
          <FontAwesomeIcon icon={faSignOut} />
          Logout
        </Link>} */}
      </nav>
    </header>
  );
};

export default Navbar;
