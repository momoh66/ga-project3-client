//https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='form-section'>
      <div className='login-hero'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className='field'>
            <label className='label'>Email</label>
            <input className='input' type='text' placeholder='Enter your email...' />
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <input className='input' type='password' placeholder='Enter your password...' />
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
