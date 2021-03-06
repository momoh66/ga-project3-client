import React from 'react';
import { Link } from 'react-router-dom';

const Neighbourhoods = () => {
  return (
    <section className='neighbourhoods-section'>
      <div className='neighbourhoods-hero'>
        <h1>Neighbourhoods</h1>
        <p className='instructions'>
          Choose from one of the neighbourhoods below to start browsing any neighbours who might be
          able to help you out!
        </p>
        <div className='neighbourhoods-container'>
          <div className='neighbourhood-border'>
            <Link to={'/profiles'} className='neighbourhood-card'>
              London ๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ
            </Link>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Mรกlaga ๐ช๐ธ</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Porto ๐ต๐น</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Milan ๐ฎ๐น</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Salisbury ๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Ibiza ๐ช๐ธ</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Berlin ๐ฉ๐ช</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>New York ๐บ๐ธ</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
      <footer id='neighbourhoods-footer'>
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin, M. Mohamed
      </footer>
    </section>
  );
};

export default Neighbourhoods;
