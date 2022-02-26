import React from 'react';

const Navigation = ({ currentPage, pageChange }) => {
  return (
    <div className='flex flex-row justify-end items-center font-[400] text-xl'>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#AboutMe' onClick={() => pageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'text-black active' : 'text-grey'}>
          About Me
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#ProjectContainer' onClick={() => pageChange('ProjectContainer')} className={currentPage === 'ProjectContainer' ? 'text-black active' : 'text-grey'}>
          Portfolio
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#Contact' onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'text-black active' : 'text-grey'}>
          Contact
        </a>
      </div>
      <div className='mx-4 link-underline link-underline-black'>
        <a href='#Resume' onClick={() => pageChange('Resume')} className={currentPage === 'Resume' ? 'text-black active' : 'text-grey'}>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navigation;