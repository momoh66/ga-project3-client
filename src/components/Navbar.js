import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHouseNight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faHeart,
  faTree,
  faPeopleRoof,
  faCrown,
  faUserLock,
  faChildReaching
} from '@fortawesome/free-solid-svg-icons';
import treeImg from '../images/tree.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  let location = useLocation();
  console.log('location.pathname', location.pathname);
  const [onPage, setOnPage] = useState(location.pathname);

  useEffect(() => {
    setOnPage(location.pathname);
  }, [location]);

  console.log('onPage', onPage);

  const toggleMenu = () => setSideBar(!sideBar);

  return (
    <header>
      <div className='navbar'>
        <Link to={'/'} className='navbar-item logo'>
          <img src={treeImg} alt='tree logo' className='treelogo' />
          Neighbour Needs
        </Link>
        <Link to={'#'} className='navbar-item bars' onClick={toggleMenu}>
          <div className='bar bar1'></div>
          <div className='bar bar2'></div>
          <div className='bar bar3'></div>
        </Link>
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
          to={'/neighbourhoods'}
          className={onPage === '/neighbourhoods' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faTree} />
          Neighbourhoods
        </Link>
        <Link
          to={'/profiles'}
          className={onPage === '/profiles' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faPeopleRoof} />
          Profiles
        </Link>
        <Link
          to={'/services'}
          className={onPage === '/services' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faCrown} />
          Services
        </Link>
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
      </nav>
    </header>
  );
};

export default Navbar;
