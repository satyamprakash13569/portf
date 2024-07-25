import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
function Contact() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className='contact-content'>
        <ContactInfoCard/>
        </div>
    </section>
  )
}

export default Contact