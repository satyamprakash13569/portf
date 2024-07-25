import React from 'react'
import './MobileMenu.css'
function MobileMenu({isOpen,toggleMenu}) {
  return (
    <div>
    <div className={`mobile-menu ${isOpen? "active":""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
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
        </div>
    </div>
</div>
  )
}

export default MobileMenu