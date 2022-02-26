import React from 'react';

const Resume = () => {
  return (
    <div className='flex flex-col justify-start ml-40 mr-36 my-24 text-mainBlack'>
      <div>
        <h1 className='text-6xl font-[500] pt-4'>Resume</h1>
        <div className='text-3xl font-[400] mt-24'>
          <h2 className='text-mainGrey'><span className='text-mainGrey font-[500]'><a href={process.env.PUBLIC_URL + '/resume.md'} download='SJH_resume.md'>Click here</a></span> to download my resume</h2>
        </div>
      </div>
      <div className='mt-28'>
        <div>
          <h3 className='text-lg font-[500]'>FRONT-END PROFICIENCIES</h3>
          <ul className='text-lg font-[400] mt-4'>
            <li className='mt-2 ml-3'>{`\u2022 ReactJS`}</li>
            <li className='mt-2 ml-3'>{`\u2022 Tailwind CSS`}</li>
            <li className='mt-2 ml-3'>{`\u2022 HTML & CSS`}</li>
            <li className='mt-2 ml-3'>{`\u2022 JavaScript`}</li>
          </ul>
        </div>
        <div className='mt-8 divided w-1/2'>
          <h3 className='text-lg font-[500] mt-8'>BACK-END PROFICIENCIES</h3>
          <ul className='text-lg font-[400] mt-4'>
            <li className='mt-2 ml-3'>{`\u2022 MongoDB`}</li>
            <li className='mt-2 ml-3'>{`\u2022 Sequelize`}</li>
            <li className='mt-2 ml-3'>{`\u2022 SQL`}</li>
            <li className='mt-2 ml-3'>{`\u2022 Java`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;