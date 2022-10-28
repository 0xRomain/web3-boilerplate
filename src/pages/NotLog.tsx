import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { useAccount, Web3Modal } from '@web3modal/react';
import { Fragment, useEffect, useState } from 'react';

function NotLog() {

  const navigate = useNavigate(); 
  const { account, isReady } = useAccount();
  console.log(account);

  if (account.isConnected) {
    navigate('/dashboard');
  }
  

  return (
    <>
      <Menu />
      <div className='rounded-md bg-red-50 p-4'>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <XCircleIcon className='h-5 w-5 text-red-400' aria-hidden='true' />
          </div>
          <div className='ml-3'>
            <h3 className='text-sm font-medium text-red-800'>
            Please login to access your dashboard
            </h3>
            <div className='mt-2 text-sm text-red-700'>
              <ul role='list' className='list-disc space-y-1 pl-5'>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotLog;
