import React from 'react'
import Resume
 from '../components/Resume'
import Navbar from '../components/Navbar';

const ResumeView = () => {
  return (
    <div>
      <Navbar textColor={'black'}/>
      <Resume />
    </div>
  )
}

export default ResumeView