import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ textColor, backgroundColor }) => {
  const navbarStyle = {
    color: textColor || 'white',
  };

  const navbarItemStyle = {
    position: 'relative',
    color: textColor || 'white',
  };

  const navbarItemAfterStyle = {
    backgroundColor: backgroundColor || 'white',
    content: '""',
    display: 'block',
    margin: 'left',
    height: '2px',
    width: '0',
    left: '0',
    bottom: '0',
    position: 'absolute',
  };

  return (
    <div className='nav-container'>
      <span className='title' style={navbarStyle}>
        MOSS
      </span>
      <nav>
        <ul className='navbar'>
          <li>
            <Link to="/" style={navbarItemStyle}>
              Home
              <span style={navbarItemAfterStyle}></span>
            </Link>
          </li>
          <li>
            <Link to="/projects" style={navbarItemStyle}>
              Projects
              <span style={navbarItemAfterStyle}></span>
            </Link>
          </li>
          <li>
            <Link to="/skills" style={navbarItemStyle}>
              Skills
              <span style={navbarItemAfterStyle}></span>
            </Link>
          </li>
          <li>
            <Link to="/resume" style={navbarItemStyle}>
              Resume
              <span style={navbarItemAfterStyle}></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={navbarItemStyle}>
              Contact Me
              <span style={navbarItemAfterStyle}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
