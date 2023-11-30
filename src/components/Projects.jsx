import React from 'react'
import './styles/projectstyles.css'
import gsap from 'gsap'; 

const Projects = () => {

  const projects = [
    {
      title: "New York",
      color: "#F06318"
    },
    {
      title: "San Francisco",
      color: "#DCF018"
    },
    {
      title: "San Antonio",
      color: "#18F0E8"
    },
    {
      title: "Nashville",
      color: "#8C0CF0"
    },
    {
      title: "Houston",
      color: "#F0183C"
    },
    {
      title: "New Orleans",
      color: "#F0BA18"
    },
    {
      title: "Oklahoma City",
      color: "#0C34F0"
    },
    {
      title: "Detroit",
      color: "#0CBCF0"
    },
    {
      title: "Indianapolis",
      color: "#91F018"
    }
  
  ]
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }

  return (
    <div className='project-wrapper'>
      <main>
        {
          projects.map((project, index) => {
            return (
              <div
                onMouseEnter={(e) => { manageMouseEnter(e, index) }}
                onMouseLeave={(e) => { manageMouseLeave(e, index) }}
                key={index}
              >
                <p>{project.title}</p>
              </div>
            );
          })
        }
      </main>
    </div>
  );
}

export default Projects