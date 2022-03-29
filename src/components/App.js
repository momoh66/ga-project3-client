import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Neighbourhoods from './Neighbourhoods';
import Profiles from './Profiles';
import Services from './Services';
import Register from './Register';
import Login from './auth/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/neighbourhoods' element={<Neighbourhoods />} />
        <Route path='/profiles' element={<Profiles />} />
        <Route path='/services' element={<Services />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
