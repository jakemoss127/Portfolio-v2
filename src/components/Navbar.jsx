import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <span className='title'>MOSS</span>
        <nav>
            <ul className='navbar'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar