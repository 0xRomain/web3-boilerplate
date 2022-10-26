import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='App-content'>
      <h2 className='text-2xl font-bold'>ABOUT</h2>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default About;
