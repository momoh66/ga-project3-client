import React from 'react';
import { useState, useEffect } from 'react';
import { getProfileById } from '../api/profiles';
// import profilePic from '../images/bitmoji.png';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareH } from '@fortawesome/free-solid-svg-icons';

const SingleProfile = ({ extractDate, extractTime }) => {
  const { id } = useParams();
  console.log('id', id);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ rating: '' });

  useEffect(() => {
    const getData = async () => {
      const userProfile = await getProfileById(id);
      console.log('data.body:', userProfile.body);
      setProfile(userProfile.body);
    };
    getData();
  }, [id]);

  const onChange = (e) => {
    if (e.target.name === 'rating') {
      const inputValue = parseInt(e.target.value);
      if (inputValue > 5 || inputValue < 1) {
        return null;
      } else {
        setFormData({ ...formData, rating: inputValue });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // function extractDate(timestamp) {
  //   return timestamp.split('T')[0];
  // }

  // function extractTime(timestamp) {
  //   return timestamp.split('T')[1].split('.')[0];
  // }

  function getStars(rating) {
    const numberOfStars = Math.round(Number(rating));
    switch (numberOfStars) {
      case 1:
        return '⭐️';
      case 2:
        return '⭐️⭐️';
      case 3:
        return '⭐️⭐️⭐️';
      case 4:
        return '⭐️⭐️⭐️⭐️';
      case 5:
        return '⭐️⭐️⭐️⭐️⭐️';
      default:
        return '';
    }
  }

  function handleHelperToggle(e) {
    console.log('helper button:', e.target.value);
  }

  return (
    <section className='singleProfile-section'>
      <div className='singleProfile-hero'>
        {!profile ? (
          <p>Loading profile...</p>
        ) : (
          <div className='singleProfile-container'>
            <div className='user-profile'>
              <div className='profile-picture-container'>
                <img
                  className='profile-picture'
                  // src={profilePic}
                  src={profile.imageProfile}
                  alt='profile picture'
                />
                <p className='stars'>{getStars(profile.averageRating)}</p>
              </div>
              <div className='profile-info'>
                <div className='profile-name'>
                  <h1>{`${profile.firstName} ${profile.surname}`}</h1>
                  <span
                    className={profile.isHelper ? 'hovertext' : 'hide'}
                    data-hover='Certified Helper at Neighbour Needs!'
                  >
                    <FontAwesomeIcon className='helper-badge' icon={faSquareH} />
                  </span>
                </div>
                <p className={!profile.isHelper ? 'helper-toggle' : 'hide'}>
                  <span id='helper'>Become a helper:</span>&nbsp;
                  <button className='helper-button' onClick={handleHelperToggle}>
                    Yes
                  </button>
                </p>
                <p className={profile.isHelper ? 'service-text' : 'hide'}>
                  <span>Service:</span>&nbsp;
                  {profile.services[0]}
                </p>
                <p className={profile.isHelper ? '' : 'hide'}>
                  <span>Average Rating:</span>&nbsp;
                  {profile.averageRating}
                </p>
                <p>
                  <span>Location:</span>&nbsp;
                  {`${profile.region} ${profile.city}`}
                </p>
                <p>
                  <span>Bio:</span>&nbsp;Hey There! I'm an interior designer and would love to help
                  you out with any work in this area you might need! Give me a shout!
                </p>
              </div>
            </div>
            <div className={profile.isHelper ? 'comments-section' : 'hide'}>
              <h3>Comments</h3>
              <div className='comment-show'>
                <div className='leave-comment-container'>
                  <div className='leave-comment-wrapper'>
                    <label className='label' htmlFor='comment'>
                      Leave a Comment!
                    </label>
                    <textarea
                      name='comment-box'
                      id='comment'
                      cols='25'
                      rows={profile.comments.length !== 0 ? '5' : '3'}
                    />
                  </div>
                  <div className='leave-rating-wrapper'>
                    <label className='label' htmlFor='rating'>
                      Leave a rating (1-5)!
                    </label>
                    <input
                      onChange={onChange}
                      value={formData.rating}
                      type='number'
                      id='rating'
                      name='rating'
                    />
                  </div>
                  <button type='submit' className='submit-comment'>
                    Submit
                  </button>
                </div>
                <div className='comments-container'>
                  {profile.comments.length === 0 ? (
                    <p>No comments yet. Be the first to leave one!</p>
                  ) : (
                    <div className='comments-container'>
                      {profile.comments.map((comment) => (
                        <div key={comment._id} className='comment'>
                          <p className='commentText'>{comment.text}</p>
                          <p className='commentRating'>{comment.rating}</p>
                          <p className='commentRating'>{`${comment.createdByName} ${comment.createdBySurname}`}</p>
                          <div className='comment-datetime'>
                            <p className='commentRating'>{extractDate(comment.createdAt)}</p>
                            <p className='commentRating'>{extractTime(comment.createdAt)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* <div className='comments-container'>
                <div className='comment comment-one'>
                  <p className='commentText'>Terrific!</p>
                  <p className='commentRating'>10</p>
                </div>
                <div className='comment comment-two'>
                  <p className='commentText'>Great!</p>
                  <p className='commentRating'>9</p>
                </div>
                <div className='comment comment-three'>
                  <p className='commentText'>Would recommend.</p>
                  <p className='commentRating'>8.7</p>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
      <footer id='single-profile-footer'>
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin, M. Mohamed
      </footer>
    </section>
  );
};

export default SingleProfile;
