import React from 'react';
import ProjectBox from './ProjectBox';
import Mechanic from '../images/Mechanic.png';
import Publishers from '../images/Publishers.png';
import Sheerwellness from '../images/Sheerwellness.png';
import Shorten from '../images/Shorten.png';
import KundaliGuru from '../images/KundaliGuru.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Mechanic} projectName="MechanicNow" />
        <ProjectBox projectPhoto={Publishers} projectName="PublishersAcademic" />
        <ProjectBox projectPhoto={Sheerwellness} projectName="Sheerwellness" />
        <ProjectBox projectPhoto={Shorten} projectName="Cromax" />
        <ProjectBox projectPhoto={KundaliGuru} projectName="KundaliGuru" />
      </div>

    </div>
  )
}

export default Projects