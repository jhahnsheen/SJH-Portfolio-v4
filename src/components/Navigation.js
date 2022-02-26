import React from 'react';

const Navigation = ({ currentPage, pageChange }) => {
  return (
    <div className='flex flex-row justify-end items-center font-[400] text-xl'>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#AboutMe' onClick={() => pageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'text-mainBlack active' : 'text-mainGrey'}>
          About Me
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#ProjectContainer' onClick={() => pageChange('ProjectContainer')} className={currentPage === 'ProjectContainer' ? 'text-mainBlack active' : 'text-mainGrey'}>
          Portfolio
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#Contact' onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'text-mainBlack active' : 'text-mainGrey'}>
          Contact
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#Resume' onClick={() => pageChange('Resume')} className={currentPage === 'Resume' ? 'text-mainBlack active' : 'text-mainGrey'}>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navigation;