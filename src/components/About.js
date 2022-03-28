import React from 'react';
import githubLogo from '../images/github-logo.png';
import linkedinLogo from '../images/linkedin-logo.png';

const About = () => {
  return (
    <section className='about-section'>
      {/* <div className='border-image'> */}
      <div className='about-container'>
        <div className='hero-text'>
          <h1>About</h1>
          <div className='about-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, officia
              facilis veniam cum, aut, soluta possimus voluptas explicabo minima dicta. Quisquam, ex
              ad delectus rerum quo ab nisi iusto dicta veniam! Eveniet molestiae doloremque commodi
              reiciendis officia laboriosam tempora quaerat excepturi magnam, provident nesciunt,
            </p>
            <p>
              omnis ad neque dolorum quidem quod beatae recusandae, ducimus impedit ex? Commodi
              repellendus ullam modi ipsum magnam reiciendis minus quidem earum? Neque fugiat
              temporibus aspernatur ad provident cupiditate, ipsa, dolores atque velit error
              accusamus iure tempore numquam nesciunt reiciendis corrupti perspiciatis eligendi
              porro autem eius consequatur! At debitis est, mollitia doloribus reiciendis
              voluptatum. Quae, dolorum!
            </p>
          </div>
          <h1>Created By</h1>
          <div className='created-by-container'>
            <div className='creator-border'>
              <div className='creator ana'>
                <img
                  className='creator-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02QAC7RXPV-49f1a49faa65-512'
                  alt='ana picture'
                />
                <div className='creator-text'>
                  <h2>Ana Borges</h2>
                  <div className='links'>
                    <div className='link'>
                      <img src={githubLogo} alt='github logo' width='20px' />
                      <a href='#'>GitHub</a>
                    </div>
                    <div className='link'>
                      <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      <a href='#'>LinkedIn</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, sit!</p>
                </div>
              </div>
            </div>
            <div className='creator-border'>
              <div className='creator emily'>
                <img
                  className='creator-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02TR88BMU3-0c8ca24825dd-512'
                  alt='emily picture'
                />
                <div className='creator-text'>
                  <h2>Emily Daykin</h2>
                  <div className='links'>
                    <div className='link'>
                      <img src={githubLogo} alt='github logo' width='20px' />
                      <a href='#'>GitHub</a>
                    </div>
                    <div className='link'>
                      <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      <a href='#'>LinkedIn</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, sit!</p>
                </div>
              </div>
            </div>
            <div className='creator-border'>
              <div className='creator mo'>
                <img
                  className='creator-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02STMWJE8K-0f48c0c833d1-512'
                  alt='mo picture'
                />
                <div className='creator-text'>
                  <h2>Mohamed Mohamed</h2>
                  <div className='links'>
                    <div className='link'>
                      <img src={githubLogo} alt='github logo' width='20px' />
                      <a href='#'>GitHub</a>
                    </div>
                    <div className='link'>
                      <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      <a href='#'>LinkedIn</a>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, sit!</p>
                </div>
              </div>
            </div>
          </div>
          <footer>Created at GA SEI62 &#126; Copyright &copy; 2022</footer>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
