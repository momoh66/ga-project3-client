import React from 'react';
import githubLogo from '../images/github-logo.png';
import linkedinLogo from '../images/linkedin-logo.png';

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='hero-text'>
          <h1>About</h1>
          <div className='about-text'>
            <p>
              This website was created with the intent of getting the services you need just one
              click away. After creating your profile, you can set yourself as a helper or you can
              ask for help to the ones closest to you by making a post with the service you require
              and the urgency of getting it done. The goal of this website is to bring you closer to
              those who live closest to you.
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
                  <p>Tristan Hall fangirl.</p>
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
                  <p>Relationship goals: Simon Clemson and Milo Bedini</p>
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
                  <p>Nick Hayes wannabe.</p>
                </div>
              </div>
            </div>
          </div>
          <h1>Acknowledgements</h1>
          <div className='about-text'>
            <p>
              We would like to acknowledge our fellow classmates who have consented to sharing their
              picture on our website as example users.
            </p>
          </div>
          <footer>Created at GA SEI62 &#126; Copyright &copy; 2022</footer>
        </div>
      </div>
    </section>
  );
};

export default About;
