import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <span className='title'>MOSS</span>
        <nav>
            <ul className='navbar'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#resume'>Resume</a>
                </li>
                <li>
                    <a href='#contact'>Contact Me</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar