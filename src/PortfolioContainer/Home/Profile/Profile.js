import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";


export default function Profile() {
  return (

             <div className='profile-container'>   
         <div className='profile-parents' >
             <div className='profile-details'>
                 <div className='colz'>
                  <div className='colz-icon'>
                     <a href="https://www.facebook.com/pascalnora.01">
                         <i className="fa fa-facebook-square"></i>
                     </a>
                     <a href="https://www.instagram.com/paschal992">
                         <i className="fa fa-google-plus-square"></i>
                     </a>
                     <a href="https://www.instagram.com/paschal992">
                         <i className="fa fa-instagram"></i>
                     </a>
                     <a href="https://www.instagram.com/paschal992">
                         <i className="fa fa-youtube-square"></i>
                     </a>
                     <a href="https://www.twitter.com/@OnuorahSylvest3">
                         <i className="fa fa-twitter"></i>
                     </a>
                  </div>
                 </div>
                 <div className="profile-details-name">
                     <span className="primary-text">
                         {"  "}
                         Hello, I'M <span className="highlighted-text">Sylvester</span>
                     </span>
                 </div>
                 <div className='profile-details-role'>
                     <span className='primary-text'>
                         {" "}
                         <h1>
                             {" "}
                             <Typical 
                             loop={Infinity}
                             steps={[
                                     "Enthusiastic Dev ",
                                     2000,
                                     "Full Stack Deveveloper",
                                     2000,
                                     "MERN Stack Dev",
                                     2000,
                                     "Enthusiastic Dev",
                                     2000,
                                     "React/React Native Dev",
                                     1000,
                                     "Cross Platform Dev",
                                     2000,
                                ]}    
                             />
                         </h1>
                      <span className="profile-role-tagline">
                         Knack of building applications with front and back end 
                         operations.
                       </span>
                     </span>
                 </div>
                 <div className='profile-options'>
                     <button className='btn primary-btn'>
                         {""}
                         Hire Me{" "}
                     </button>
                        <a href='onuorahcv.pdf' download='Chijioke onuorahcv.pdf'>
                         <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                 </div>
             </div>
             <div className="profile-picture">
             <div className="profile-pictures-background"></div>
             </div>
         </div>
     </div>


  )
}