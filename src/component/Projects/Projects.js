import React from 'react'
import "./Projects.css"
function Projects() {
  return (
    <section className='project-container'>
      <h5>Projects</h5> 
      <div>
        <div className='project-content'>
        <a href='https://github.com/s1a3t5y6a9m/Weather-App' target='__blank' className='project'>
           <img src='/W.png' alt='' />
        </a>
        <a href='https://github.com/s1a3t5y6a9m/Tic-Tac-Toe' target='__blank' className='project'>
           <img src='/T.png' alt='' />
        </a>
        <a href='https://github.com/satyamprakash13569/realstateproject' target='__blank' className='project'>
           <img src='R.png' alt='' />
        </a>
      </div>
      </div> 
    
     </section>
  )
}

export default Projects