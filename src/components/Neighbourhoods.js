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
              London 🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </Link>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Málaga 🇪🇸</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Porto 🇵🇹</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Milan 🇮🇹</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Salisbury 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Ibiza 🇪🇸</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>Berlin 🇩🇪</span>
              <span className='coming-soon-text'>Coming Soon</span>
            </div>
          </div>
          <div className='neighbourhood-border coming-soon-city'>
            <div className='neighbourhood-card'>
              <span className='city-name'>New York 🇺🇸</span>
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
