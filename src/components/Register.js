import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    firstName: '',
    surname:'',
    email: '',
    password: '',
    passwordConfirmation: '',
    services:'',
    city:'',
    region:'',
    imageProfile:'',
    imageService:''
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await registerUser({ firstName: firstName,
    surname:surname,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation,
    services:services,
    city:city,
    region:region,
    imageProfile:imageProfile,
    imageService:imageService})
    navigate('/login')
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
                  <label htmlFor='firstName' className='register-label'>
                    First Name*
                  </label>
                  <input
                    className='register-input'
                    type='text'
                    name='firstName'
                    id='firstName'
                    onChange={handleChange}
                    value={user.firstName}
                  />
                </div>
                <div className='field'>
                  <label htmlFor='surname' className='register-label'>
                    Surname*
                  </label>
                  <input
                    className='register-input'
                    type='text'
                    name='surname'
                    id='surname'
                    onChange={handleChange}
                    value={user.surname}
                  />
                </div>
              </div>
              <div className='field'>
                <label htmlFor='email' className='register-label'>
                  Email*
                </label>
                <input
                  className='register-input'
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleChange}
                  value={user.email}
                />
              </div>
              <div className='field'>
                <label htmlFor='password' className='register-label'>
                  Password*
                </label>
                <input
                  className='register-input'
                  type='password'
                  placeholder='Requirements: Length > 8, one...'
                  name='password'
                  id='password'
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <div className='field'>
                <label
                  htmlFor='passwordConfirmation'
                  className='register-label'
                >
                  Password Confirmation*
                </label>
                <input
                  className='register-input'
                  type='password'
                  placeholder='...uppercase, lowercase & number'
                  name='passwordConfirmation'
                  id='passwordConfirmation'
                  onChange={handleChange}
                  value={user.passwordConfirmation}
                />
              </div>
            </div>
            <div className='fields-right'>
              <div className='field first'>
                <label htmlFor='services' className='register-label optional'>
                  Services (if you'd like to help)
                </label>
                <input
                  className='register-input'
                  type='text'
                  placeholder='Painting, tutoring, dog walking, therapy...'
                  name='services'
                  id='services'
                  onChange={handleChange}
                  value={user.services}
                />
              </div>
              <div className='double-field unequal'>
                <div className='field'>
                  <label htmlFor='city' className='register-label'>
                    City*
                  </label>
                  <input
                    className='register-input'
                    type='text'
                    placeholder='Enter your city'
                    name='city'
                    id='city'
                    onChange={handleChange}
                    value={user.city}
                  />
                </div>
                <div className='field'>
                  <label htmlFor='region' className='register-label'>
                    Region*
                  </label>
                  <input
                    className='register-input'
                    type='text'
                    placeholder='North/West/Central...'
                    name='region'
                    id='region'
                    onChange={handleChange}
                    value={user.region}
                  />
                </div>
              </div>
              <div className='field'>
                <label htmlFor='imageProfile' lassName='register-label optional'>
                  Your Profile Picture
                </label>
                <input
                  className='register-input'
                  type='text'
                  placeholder='Add a friendly picture of yourself!'
                  name='imageProfile'
                  id='imageProfile'
                  onChange={handleChange}
                  value={user.imageProfile}
                />
              </div>
              <div className='field'>
                <label htmlFor='imageService' className='register-label optional'>
                  Image of your service
                </label>
                <input
                  className='register-input'
                  type='text'
                  placeholder='Add an image of your service'
                  name='imageService'
                  id='imageService'
                  onChange={handleChange}
                  value={user.imageService}
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
