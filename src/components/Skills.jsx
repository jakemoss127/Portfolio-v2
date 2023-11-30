import React from 'react'
import './styles/skillstyles.css'
import gsap from 'gsap'; 

const Projects = () => {

  const projects = [
    {
      title: "React.js",
      color: "#F06318"
    },
    {
      title: "HTML5, CSS, JS",
      color: "#DCF018"
    },
    {
      title: "C++",
      color: "#18F0E8"
    },
    {
      title: "Microsoft SQL Server",
      color: "#8C0CF0"
    },
    {
      title: "Figma",
      color: "#F0183C"
    },
    {
      title: "UI/UX Design",
      color: "#F0BA18"
    },
    {
      title: "",
      color: "#0C34F0"
    },
    {
      title: "GitHub",
      color: "#0CBCF0"
    },
    {
      title: "Java",
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