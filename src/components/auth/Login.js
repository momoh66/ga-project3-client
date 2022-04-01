import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [error, setError] = React.useState('');
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await loginUser({ email: emailValue, password: passwordValue });
      navigate('/');
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }
  };

  return (
    <section className='form-section'>
      <div className='login-hero'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className='field'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              className='input'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email...'
              value={emailValue}
              onChange={handleEmailChange}
              autoComplete='off'
              required
            />
          </div>
          <div className='field'>
            <label htmlFor='password' className='label'>
              Password
            </label>
            <input
              className='input'
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password...'
              onChange={handlePasswordChange}
              value={passwordValue}
              autoComplete='off'
              required
            />
          </div>
          {error && <p>⛔️ Incorrect Combination please try again</p>}
          <button type='submit'>Log In</button>
          <p>
            Don't have an account?&nbsp;
            <Link className='redirect-page' to={'/register'}>
              Register
            </Link>
          </p>
        </form>
      </div>
      <footer id='login-footer'>
        Created at GA SEI62 &#126; Copyright &copy; 2022 A. Borges, E. Daykin, M. Mohamed
      </footer>
    </section>
  );
};

export default Login;
