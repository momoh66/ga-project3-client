import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='form-section'>
      <div className='register-hero'>
        <form className='register-form' onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='fields'>
            <div className='fields-left'>
              <div className='double-field'>
                <div className='field'>
                  <label className='register-label'>First Name*</label>
                  <input className='register-input' type='text' />
                </div>
                <div className='field'>
                  <label className='register-label'>Surname*</label>
                  <input className='register-input' type='text' />
                </div>
              </div>
              <div className='field'>
                <label className='register-label'>Email*</label>
                <input className='register-input' type='text' />
              </div>
              <div className='field'>
                <label className='register-label'>Password*</label>
                <input
                  className='register-input'
                  type='password'
                  placeholder='Requirements: Length > 8, one...'
                />
              </div>
              <div className='field'>
                <label className='register-label'>Password Confirmation*</label>
                <input
                  className='register-input'
                  type='password'
                  placeholder='...uppercase, lowercase & number'
                />
              </div>
            </div>
            <div className='fields-right'>
              <div className='field first'>
                <label className='register-label optional'>Services (if you'd like to help)</label>
                <input
                  className='register-input'
                  type='text'
                  placeholder='Painting, tutoring, dog walking, therapy...'
                />
              </div>
              <div className='double-field unequal'>
                <div className='field'>
                  <label className='register-label'>City*</label>
                  <input className='register-input' type='text' placeholder='Enter your city' />
                </div>
                <div className='field'>
                  <label className='register-label'>Region*</label>
                  <input
                    className='register-input'
                    type='text'
                    placeholder='North/West/Central...'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='register-label optional'>Your Profile Picture</label>
                <input
                  className='register-input'
                  type='text'
                  placeholder='Add a friendly picture of yourself!'
                />
              </div>
              <div className='field'>
                <label className='register-label optional'>Image of your service</label>
                <input
                  className='register-input'
                  type='password'
                  placeholder='Add an image of your service'
                />
              </div>
            </div>
          </div>
          <p className='footnote'>You can always edit your repsonses later.</p>
          <p className='footnote'>* Required fields</p>
          <button type='submit'>Register</button>
          <p>
            Already have an account?&nbsp;
            <Link className='redirect-page' to={'/login'}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
