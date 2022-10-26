import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='App-content'>
      <h2 className='text-2xl font-bold'>HOME</h2>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Home;
