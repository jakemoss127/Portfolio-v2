import React from 'react'
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';

const SkillView = () => {
  return (
    <div className='skill-wrapper'>
        <Navbar textColor='black' backgroundColor='black'/>
        <Skills />
    </div>
  )
}

export default SkillView