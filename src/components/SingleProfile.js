import React from 'react';
import { useState, useEffect } from 'react';
import { searchProfile } from '../api/profiles';
import profilePic from '../images/bitmoji.png';
import { useParams } from 'react-router-dom';

const SingleProfile = () => {
  const { id } = useParams();
  console.log(useParams());
  console.log('id', id);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ rating: '' });

  useEffect(() => {
    const getData = async () => {
      // const userProfile = await searchProfile(id); // why not working?!?!
      const userProfile = await searchProfile('wedding');
      console.log('userProfile.body[0]', userProfile.body[0]);
      setProfile(userProfile.body[0]);
      console.log('comments', userProfile.body[0].comments);
    };
    getData();
  }, []);

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

  function extractDate(timestamp) {
    return timestamp.split('T')[0];
  }

  function extractTime(timestamp) {
    return timestamp.split('T')[1].split('.')[0];
  }

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
                  src={profilePic}
                  alt='profile picture'
                  width='200px'
                />
                <p className='stars'>{getStars(profile.averageRating)}</p>
              </div>
              <div className='profile-info'>
                <h1>{`${profile.firstName} ${profile.surname}`}</h1>
                <p className='service-text'>
                  <span>Service:</span>&nbsp;
                  {profile.services[0]}
                </p>
                <p>
                  <span>Rating:</span>&nbsp;
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
            <div className='comments-section'>
              <h3>Comments</h3>
              <div className='comment-show'>
                <div className='leave-comment-container'>
                  <div className='leave-comment-wrapper'>
                    <label className='label' htmlFor='comment'>
                      Leave a Comment!
                    </label>
                    <textarea name='comment-box' id='comment' cols='25' rows='5' />
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
                  {!profile.comments ? (
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
    </section>
  );
};

export default SingleProfile;
