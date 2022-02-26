import React, { Fragment } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import Sidebar from '../Sidebar/Sidebar';
import items from '../Sidebar/variables';
import LandingPage from './LandingPage';

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className='ui equal width grid'>
        <div className='ui two wide column move'>
          <Sidebar items={items} />
        </div>
        <div className='eight wide column'>
          <LandingPage />
        </div>
      </div>
    </>
  );
}
