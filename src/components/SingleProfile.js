import React from 'react';
import { useState, useEffect } from 'react';
import { createComment, getProfileById, deleteComment } from '../api/profiles';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareH, faXmark } from '@fortawesome/free-solid-svg-icons';
import { getLoggedInUserId } from '../lib/auth';

const SingleProfile = ({ extractDate, extractTime }) => {
  const { id } = useParams();
  // console.log('id', id);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({ comment: '', rating: '' });

  useEffect(() => {
    const getData = async () => {
      const userProfile = await getProfileById(id);
      console.log('data.body:', userProfile.body);
      setProfile(userProfile.body);
    };
    getData();
  }, [id]);

  /** Handles Comment text and Rating changes: **/
  const handleInputChange = (e) => {
    if (e.target.name === 'rating') {
      const inputValue = parseInt(e.target.value);
      console.log(inputValue);
      if (inputValue > 5 || inputValue < 1) {
        return null;
      } else {
        setFormData({ ...formData, rating: inputValue });
      }
    } else {
      // console.log(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleCommentSubmit(e) {
    console.log('clicked!');
    e.preventDefault();
    const data = await createComment(id, { text: formData.comment, rating: formData.rating });
    console.log('FORM DATA', data);
    setProfile(data.savedProfile);
    setFormData({ comment: '', rating: '' });
  }

  async function handleDeleteComment(commentId) {
    const data = await deleteComment(id, commentId);
    setProfile(data.body);
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
                <img className='profile-picture' src={profile.imageProfile} alt='profile picture' />
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
                  <span>Bio:</span>&nbsp;
                  {profile.bio}
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
                      onChange={handleInputChange}
                      name='comment'
                      id='comment'
                      value={formData.comment}
                      cols='25'
                      rows={profile.comments.length !== 0 ? '5' : '3'}
                    />
                  </div>
                  <div className='leave-rating-wrapper'>
                    <label className='label' htmlFor='rating'>
                      Leave a rating (1-5)!
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formData.rating}
                      type='number'
                      id='rating'
                      name='rating'
                    />
                  </div>
                  <input
                    type='submit'
                    className={getLoggedInUserId() ? 'submit-comment' : 'submit-comment-disabled'}
                    onClick={handleCommentSubmit}
                    value={getLoggedInUserId() ? 'Submit' : 'You must be logged in to comment'}
                  />
                </div>
                <div className='comments-container'>
                  {profile.comments.length === 0 ? (
                    <p>No comments yet. Be the first to leave one!</p>
                  ) : (
                    // <div className='comments-container'>
                    profile.comments.map((comment) => (
                      <div key={comment._id} className='comment'>
                        <div className='name-and-xMark'>
                          <p className='commentName'>{`${comment.createdByName} ${comment.createdBySurname}`}</p>
                          {getLoggedInUserId() === comment.createdById && (
                            <FontAwesomeIcon
                              className='delete-comment'
                              icon={faXmark}
                              onClick={() => handleDeleteComment(comment._id)}
                            />
                          )}
                        </div>
                        <p className='commentDateTime'>{`${extractTime(
                          comment.createdAt
                        )}, ${extractDate(comment.createdAt)}`}</p>
                        <p className='commentText'>{comment.text}</p>
                        <p className='commentRating'>Rating: {comment.rating}</p>
                      </div>
                    ))
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
