import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentPage, pageChange }) => {
  return (
    <div className='flex justify-between pl-40 pr-36 py-20'>
      <h1 className='font-[500] text-[44px] text-mainBlack'>sjh.</h1>
      <Navigation currentPage={currentPage} pageChange={pageChange} />
    </div>
  );
}

export default Header;