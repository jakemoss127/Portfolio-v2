import './App.css';
import { useEffect, useRef } from 'react';
import githubLogo from './assets/github-logo.png'

function App() {
  const appRef = useRef(null);
  
  useEffect( () => {

    const moveGradient = (event) => {
      const windowWidth = window.innerWidth; 
      const windowHeight = window.innerHeight; 

      const mouseX = Math.round((event.pageX / windowWidth) * 100)
      const mouseY = Math.round((event.pageY / windowHeight) * 100)

      if(appRef) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%")
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%")
      }
    };

    document.addEventListener("mousemove", moveGradient);
    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [appRef])

  const toGithub = () => {
    const myUrl = 'https://github.com/jakemoss127'; 
    window.open(myUrl, '_blank');
  }

  return (
    <div className="app" id="app" ref={appRef}>
      <div className='content-container'>
        <span className='title'>MOSS</span>
        <p className='description'>
          HELLO YOU!<br />
          I'M <span className='name-title'>JACOB MOSS</span> AND THIS IS MY PORTFOLIO.<br />
          YES, I CODE AND HAVE A <span className='passion-title'>PASSION</span> FOR CREATIVITY.<br/>
          AND YES, I ALSO LOVE GRADIENTS.<br />
        </p>
        <img className='git-logo' src={githubLogo} alt='github-logo' onClick={toGithub}/>
      </div>
    </div>
  );
}

export default App;
