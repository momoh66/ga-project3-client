import React from 'react';
import treeImg from '../images/tree-transparent.png';

const Home = () => {
  return (
    <section className='home-section'>
      <div className='hero'>
        <div className='hero-text'>
          <div className='hero-text-logo'>
            <img src={treeImg} alt='tree logo' className='home-treelogo' />
            <h1>Neighbour Needs</h1>
          </div>
          <p>Anything you need from just next door!</p>
        </div>
      </div>
      <footer id='home-footer'>
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin, M. Mohamed
      </footer>
    </section>
  );
};

export default Home;
