import React, { useEffect, useRef } from "react";
import Navbar from '../components/Navbar';
import '../components/styles/projectstyles.css'

const ProjectView = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / windowWidth) * 100);
      const mouseY = Math.round((event.pageY / windowHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    document.addEventListener("mousemove", moveGradient);

    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [appRef]);

  return (
    <div className='project-view' ref={appRef}>
      <Navbar/>
    </div>
  );
};

export default ProjectView;
