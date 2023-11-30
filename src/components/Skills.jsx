import React from 'react'
import './styles/skillstyles.css'
import gsap from 'gsap'; 

const Projects = () => {

  const projects = [
    {
      title: "Java",
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
      title: "React",
      color: "#91F018"
    }
  
  ]
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }

  const navigateSite = (e, project) => {
    switch(project.title) {
      case "React":
        window.open('https://react.dev/', '_blank');
        break;
      case "C++":
        window.open('https://cplusplus.com/', '_blank');
        break;
      case "Java":
        window.open('https://www.java.com/en/', '_blank');
        break;
      case "HTML5, CSS, JS":
        window.open('https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/', '_blank');
        break;
      case "Microsoft SQL Server":
        window.open('https://www.microsoft.com/en-us/sql-server', '_blank');
        break;
      case "Figma":
        window.open('https://www.figma.com/community', '_blank');
        break;
      case "UI/UX Design":
        window.open('https://www.figma.com/community', '_blank');
        break;
      case "GitHub":
        window.open('https://github.com', '_blank');
        break; 
      default:
        break;
    }
  }

  return (
    <div className='project-wrapper'>
      <main>
        <h1 className='my-skills'>My Skills</h1>
        {
          projects.map((project, index) => {
            return (
              <div
                onMouseEnter={(e) => { manageMouseEnter(e, index) }}
                onMouseLeave={(e) => { manageMouseLeave(e, index) }}
                onClick={(e) => {navigateSite(e, project)}}
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