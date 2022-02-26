import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <h3>Sheen J Hahn ⏤ 2022</h3>
      </div>
      <div className='flex justify-around'>
        <a href='https://github.com/jhahnsheen'>GitHub</a>
        <a href='https://www.linkedin.com/in/jhahnsheen/'>LinkedIn</a>
        <a href='https://stackoverflow.com/users/17011588/jhahnsheen'>StackOverflow</a>
      </div>
    </div>
  );
}

export default Footer;