import React from 'react'
import './ContactInfoCard.css';
function ContactInfoCard() {
  return (
    <div className='contact-detail-card'>
         <a className='icon' href="https://www.linkedin.com/in/satyam-prakash-singh-741a9426a" target="__blank">
          <img src='/linkedinIcon.png' alt=''/>
        </a>
        <a className='icon' href="https://github.com/satyamprakash13569" target="__blank">
          <img src='/git.jpg' lt='' />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=satyam13569@gmail.com.com" className='icon' target='__blank'>
        <img src='/EmailIcon.png' alt=''/>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=satyam13569@gmail.com.com" className='icon' target='__blank'>
        <img src='/resume.jpg' alt=''/>
        </a>
    </div>
  )
}

export default ContactInfoCard