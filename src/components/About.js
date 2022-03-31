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
            <div className='users-container'>
              <div className='user ash'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U030DDX0YP2-3fc7e7a6502e-512'
                  alt='Ash picture'
                />
                <div className='user-text'>
                  <h5>Ash G.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/agyngell' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/ashley-gyngell-292457230/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user calum'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02K9KRPQH2-e7c2fe998fcd-512'
                  alt='Calum picture'
                />
                <div className='user-text'>
                  <h5>Calum M.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/calum-m708' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/calum-maceachen-b21847176/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user ed'>
                <img
                  className='user-img'
                  src='https://media-exp1.licdn.com/dms/image/C4E03AQFvRuDqaNMLLQ/profile-displayphoto-shrink_400_400/0/1647541273789?e=1654128000&v=beta&t=9JSFarOS45p99ScaMWMmUvL5UkaNkpi9lMRMoCdjqBg'
                  alt='Edward picture'
                />
                <div className='user-text'>
                  <h5>Edward F.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/fouldsej' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/edward-foulds-138170126/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user jt'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02SQP54RLM-a550afb7c9a1-512'
                  alt='Jt picture'
                />
                <div className='user-text'>
                  <h5>JT Black</h5>
                  <div className='links'>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/j-t-black-a46800225/'
                        rel='noreferrer'
                      >
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/j-t-black-a46800225/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user joe'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02UCPTR61K-dbea284e2407-512'
                  alt='Joe picture'
                />
                <div className='user-text'>
                  <h5>Joe D.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/jdeering94' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/joe-deering-a009051b0/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user marco'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02847P7ME2-297de63247f9-512'
                  alt='Marco picture'
                />
                <div className='user-text'>
                  <h5>Marco M.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/frozenborder72' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/marco-manunta-7b545814/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user matt'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02QCKEJEHJ-16c19eb60fcf-512'
                  alt='Matt picture'
                />
                <div className='user-text'>
                  <h5>Matt C.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/beltonjohn' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/matthew-creese-a44338213/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user michael'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U027VDM1BTK-e12a10378988-512'
                  alt='Michael picture'
                />
                <div className='user-text'>
                  <h5>Michael S.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/mstephanou' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/michael-stephanou/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user milo'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02AHLPNSNQ-7a7399fc3501-512'
                  alt='Milo picture'
                />
                <div className='user-text'>
                  <h5>Milo B.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/milobedini' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/milo-bedini/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user priya'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02STM08KMY-74668cc30608-512'
                  alt='Priya picture'
                />
                <div className='user-text'>
                  <h5>Priya P.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/Pea75x' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/priya-patel-974621124/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user tatiana'>
                <img
                  className='user-img'
                  src='https://media-exp1.licdn.com/dms/image/C4D03AQEPZm_G5Kv7xg/profile-displayphoto-shrink_400_400/0/1536674161453?e=2147483647&v=beta&t=A8SOWV7Z4P0RTFvJDSvskdnwOkIiJf32wQqZpOJk5Os'
                  alt='Tatiana picture'
                />
                <div className='user-text'>
                  <h5>Tatiana G.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/TatianaRG' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/tatiana-guzun-a54125146/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='user tom'>
                <img
                  className='user-img'
                  src='https://ca.slack-edge.com/T0351JZQ0-U02SM10EE6S-3b8372b56926-512'
                  alt='Tom picture'
                />
                <div className='user-text'>
                  <h5>Tom R.</h5>
                  <div className='links'>
                    <div className='link'>
                      <a target='_blank' href='https://github.com/tomcriley' rel='noreferrer'>
                        <img src={githubLogo} alt='github logo' width='20px' />
                      </a>
                    </div>
                    <div className='link'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/tom-riley-746055121/'
                        rel='noreferrer'
                      >
                        <img src={linkedinLogo} alt='linkedin logo' width='20px' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>Created at GA SEI62 &#126; Copyright &copy; 2022</footer>
        </div>
      </div>
    </section>
  );
};

export default About;
