import React from 'react';

const AboutMe = () => {
  return (
    <div className='pl-40 flex justify-between'>
      <div className='w-1/2 py-28'>
        <h1 className='text-6xl font-[500] text-black'>Hello, I'm </h1>
        <h1 className='text-6xl font-[500] text-black'>Sheen J Hahn.</h1>
        <h3 className='text-3xl font-[400] text-grey pt-8'>A Georgia Tech student and full stack developer.</h3>
      </div>
      <div className='py-8 pr-36'>
        <img src={process.env.PUBLIC_URL + '/portrait.jpeg'} alt='filler pic' width='420' />
      </div>
    </div>
  );
}

export default AboutMe;