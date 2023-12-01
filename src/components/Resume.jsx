import React, {useState} from 'react'
import './styles/resumestyles.css'
import Confetti from './Confetti'
import myResume from '../assets/Resume.pdf'

const Resume = () => {

  const [doConf, setDoConf] = useState(false);

const handleClick = () => { 
  setDoConf(true);
  setTimeout(() => {
    setDoConf(false);
  }, 15000);

}

  return (
    <div className='resume-wrapper'>
      <div className="button-and-title">
        <h1 className="resume-title">Thank you for giving me a chance!</h1>
          <button className="confetti" onClick={handleClick}>
            <a href={myResume} download={'JacobMossResume.pdf'}>Download My Resume</a>
          </button>
          <Confetti doConfetti={doConf}/>
      </div>
    </div>
  )
}

export default Resume