import React from 'react'
import './About.css';

export default function About() {
  return (  
     <div>
    <span className='about'>
           <h3><strong>About Me</strong></h3>
            </span>
            <span className='why'>
            <p>why choose me?</p>
            </span>
            
    <div className='container'>
   
          <div class="card-group">
            <div class="card">
            <img src={require('../../assets/Home/about.jpg')}
             alt='No internet connection'/> 
            </div>
            <div class="card">
              <div class="card-body">
                <p class="card-text">Full stack web and mobile developer with background knowledge of MERN stack applications with utmost effeciency. Strong professional with
                a BSc willing to be an asset for an organization.</p>
                <br/>
                <ul>
                    <strong>Here are some few highlights:</strong>
                    <li>Full stack web and mobile development</li>
                    <li>Interactive Front End as per the design</li>
                    <li>React and React Native</li>
                    <li>Redux for State Management</li>
                    <li>Buiding REST API</li>
                    <li>Managing Database</li>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                       <a href='onuorahcv.pdf' download='Chijioke onuorahcv.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                       </a>
                </div>
                </ul>
                
              </div>
            </div>
          </div>
         
</div>
</div>


   
  );
}
