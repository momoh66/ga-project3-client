import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  console.log('emailValue', emailValue);
  console.log('passwordValue', passwordValue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({ email: emailValue, password: passwordValue });
    navigate('/');
  };

  return (
    <section className='form-section'>
      <div className='login-hero'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className='field'>
            <label className='label'>Email</label>
            <input
              className='input'
              type='text'
              name='email'
              placeholder='Enter your email...'
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Enter your password...'
              onChange={handlePasswordChange}
              value={passwordValue}
            />
          </div>
          <button type='submit'>Log In</button>
          <p>
            Don't have an account?&nbsp;
            <Link className='redirect-page' to={'/register'}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
