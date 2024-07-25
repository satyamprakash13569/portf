import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
function Navbar() {
    const [openMenu,setOpenMenu]=useState(false);
    function toggleMenu(){
        setOpenMenu(!openMenu);
    };
  return (
    <div>
        <MobileMenu isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <p className='logo'>S.</p>
                <ul>
                    <li>
                        <a className='menu-item' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href='/'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' href='/'>Projects</a>
                    </li>
                    <li>
                        <a className='menu-item' href='/'>Contact Me</a>
                    </li>
                </ul>
                <button className="menu-btn" onClick={toggleMenu}>
                {
                    openMenu? <img src='/closeIcon.png'  alt=''/>:<img src='/menuIcon.png'  alt=''/>
                }
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar