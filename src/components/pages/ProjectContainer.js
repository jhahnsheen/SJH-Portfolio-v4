import React from 'react';
import Project1 from './Project1';
import Project from './Project';

const ProjectContainer = ({ projects }) => {
    return (
    <div className='flex flex-col justify-around ml-40 mr-36 my-24'>
      <h1 className='text-6xl font-[500] text-mainBlack py-4'>Portfolio</h1>
      <Project1 project={projects[0]} key={projects[0].id}/>
      {projects.slice(1).map((project) => {
        return <Project project={project} key={project.id} />
      })}
    </div>
  );
}

export default ProjectContainer;