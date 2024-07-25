import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <section className='hero-container'>
       <div className='hero-content'>
        <h2>Building Digital Experiences That inspire</h2>
        <p>Passinate Web Developer | Transforming Ideas into Seamless and Visully Stunning Web Solutions</p>
        <a href='https://drive.google.com/file/d/1neo4Bc4s7Cd2HrF3U-JAtcIP9BKzKWDd/view?usp=drivesdk' target='__blank'className='resume' >Download my Resume</a>
       </div>
       <div className='hero-img'>
        <div>
            <div className='tech-icon'>
              <img src='/react.png' alt='' />
            </div>
            
            <img src='/herophoto.jpeg' alt=''/>

            <div className='tech-icon'>
              <img src='javascript.png' alt='' />
            </div>
          </div>
            <div>
                <div className='tech-icon'>
                   <img src='/html.png' alt='' />
                </div>
                <div className='tech-icon'>
                   <img src='/css.png' alt='' />
                </div>
                <div className='tech-icon'>
                   <img src='/Express.png' alt='' />
                </div>
                <div className='tech-icon' alt=''>
                  <img src='/mongodb.png' alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero