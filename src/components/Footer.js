import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between pl-40 pr-36 py-16 text-xl font-[500]'>
      <div>
        <h3>Sheen J Hahn ⏤ 2022</h3>
      </div>
      <div className='flex justify-between'>
        <a className='mx-4' href='https://github.com/jhahnsheen'>GitHub</a>
        <a className='mx-4' href='https://www.linkedin.com/in/jhahnsheen/'>LinkedIn</a>
        <a className='mx-4' href='https://stackoverflow.com/users/17011588/jhahnsheen'>StackOverflow</a>
      </div>
    </div>
  );
}

export default Footer;