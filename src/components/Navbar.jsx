import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <span className='title'>MOSS</span>
        <ul className='navbar'>
            <li>Home</li>
            <li>Contact Me</li>
            <li>Projects</li>
            <li>Resume</li>
        </ul>
    </div>
  )
}

export default Navbar