import { ConnectButton, useAccount } from '@web3modal/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const { account, isReady } = useAccount();

  return (
    <div className='App-content'>
      <h2 className='text-2xl font-bold'>HOME</h2>
      <Link to='/about'>About</Link>
      <p>Connect</p>
      {account.isConnected === true ? <p>{account.address}</p> : <ConnectButton />}
    </div>
  );
}

export default Home;
