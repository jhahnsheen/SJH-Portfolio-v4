import React from 'react';

const Project1 = ({project}) => {
  return (
    <div className='flex justify-between my-10 font-arrow'>
      <div className='flex flex-col basis-1/3 mt-24'>
        <h3 className='font-[500] text-lg text-mainBlack'>{`0${project.id} / ${project.name}`}</h3>
        <p className='font-[400] text-lg text-mainBlack mt-5'>{`${project.description}`}</p>
        <p className='font-[300] text-sm text-mainGrey mt-4'>{`${project.caption}`}</p>
        <div className='flex flex-col justify-between w-1/2 mt-16'>
          <a href={project.deployment} className='font-[500] text-lg text-mainBlack'>View deployment ↗</a>
          <a href={project.repository} className='font-[500] text-lg text-mainGrey mt-4'>GitHub repository ↗</a>
        </div>
      </div>
      <div className='my-24'>
        <img src={process.env.PUBLIC_URL + project.image} alt={`${project.name}`} width='640'/>
      </div>
    </div>
  );
}

export default Project1;