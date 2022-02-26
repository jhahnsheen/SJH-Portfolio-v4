import React from 'react';

const AboutMe = ({ pageChange }) => {
  return (
    <div>
      <div className='pl-40 flex justify-between'>
          <div className='w-1/2 py-28'>
            <h1 className='text-6xl font-[500] text-mainBlack'>Hello, I'm </h1>
            <h1 className='text-6xl font-[500] text-mainBlack'>Sheen J Hahn.</h1>
            <h3 className='text-3xl font-[400] text-mainGrey pt-8'>A Georgia Tech student and full stack developer.</h3>
            <p className='text-lg font-[400] text-mainBlack pt-16'>
              I am currently enrolled in the Georgia Tech Coding Boot Camp and am set to graduate in March of 2022. While I may not have the most work experience since I worked in college football previously, I will always bring quality and passion to any project.
            </p>
          </div>
          <div className='py-8 pr-36'>
            <img src={process.env.PUBLIC_URL + '/portrait.jpeg'} alt='filler pic' width='420' />
          </div>
      </div>
      <div className='flex justify-start ml-40 mr-36 my-24 divided'>
        <div className='w-1/3 mt-24 mb-16 relative'>
          <h3 className='text-3xl font-[400] text-mainBlack mb-5 relative'>I would love to be a part of your team!</h3>
          <div>
            <img src={process.env.PUBLIC_URL + '/arrow.svg'} alt='arrow' id='arrow' width ='24' />
          </div>
        </div>
        <div className='w-1/3 mt-24 mb-16 ml-72'>
          <div>
            <a href='#Resume' onClick={() => pageChange('Resume')} className='text-3xl font-[400] text-mainBlack'>
            View my resume
            </a>
          </div>          
          <div className='mt-4'>
            <a href='#Contact' onClick={() => pageChange('Contact')} className='text-lg font-[400] text-mainGrey'>
            Contact me
            </a>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;