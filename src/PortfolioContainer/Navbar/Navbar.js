import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isMobile, setIsMobile] = useState (false);

  return (

      <nav className='navbar'>
          <h3 className='logo'>UNIQUELORD</h3>
          <ul className={isMobile? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
          >
              <Link to="/" className="home">
                 <li>Home</li>
              </Link>
              <Link to="about" className="about">
                 <li>AboutMe</li>
              </Link>
              <Link to="resume" className="resume">
                 <li>Resume</li>
              </Link>
              <Link to="project" className="project">
                 <li>Projects</li>
              </Link>
              <Link to="contact" className="contact">
                  <li>ContactMe</li>
              </Link>
          </ul>
          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
          {isMobile ? (
            <i class="bi bi-x"></i> 
              ) :(
            <i class="bi bi-list"></i>
          )}
          </button>
      </nav>






    // <nav className="navbar navbar-expand-lg navbar-light colme text-light">
    //  <Link to = '/'><div className="rest text-light"><h1><strong>UNIQUELORD</strong></h1></div></Link>
    //   <div className='mybtn'>
    //     <button className="navbar-toggler text-light " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon text-light"></span>
    //     </button>
    //   </div>
    //     <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    //       <ul className="navbar-nav">
    //             <li className="nav-link active shape">
    //             <Link to = '/'><div className="nav-link text-light"><strong>Home</strong></div></Link>
    //             </li>
    //             <li className="nav-link shape">
    //             <Link to = '/about'><div className="nav-link text-light"><strong>AboutMe</strong></div></Link>
    //             </li>
    //             <li className="nav-link shape">
    //             <Link to = '/resume'><div className="nav-link text-light"><strong>Resume</strong></div></Link>
    //             </li>
    //             <li className="nav-link shape">
    //             <Link to = '/project'><div className="nav-link text-light"><strong>Projects</strong></div></Link>
    //             </li>
    //             <li className="nav-link shape">
    //             <Link to = '/contact'><div className="nav-link text-light"><strong>ContactMe</strong></div></Link>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>

  );
};