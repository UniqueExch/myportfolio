import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light colme text-light">
     <Link to = '/'><div className="nav-link text-light"><h1><strong>UNIQUELORD</strong></h1></div></Link>
      <div className='mybtn'>
        <button className="navbar-toggler text-light " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
             <li className="nav-item active shape">
             <Link to = '/'><div className="nav-link text-light"><strong>Home</strong></div></Link>
             </li>
             <li className="nav-item shape">
             <Link to = '/about'><div className="nav-link text-light"><strong>AboutMe</strong></div></Link>
             </li>
             <li className="nav-item shape">
             <Link to = '/resume'><div className="nav-link text-light"><strong>Resume</strong></div></Link>
             </li>
             <li className="nav-item shape">
             <Link to = '/projects'><div className="nav-link text-light"><strong>Projects</strong></div></Link>
             </li>
             <li className="nav-item shape">
             <Link to = '/contact'><div className="nav-link text-light"><strong>ContactMe</strong></div></Link>
             </li>
           </ul>
      </div>
    </nav>



      // <nav class="navbar navbar-expand-lg navbar-light bg-info">
      //   <Link to = '/'><div class="nav-link text-white"><h1><stromg>UNIQUELORD</stromg></h1></div></Link>
        
      //   <button class="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon "></span>
      //   </button>
        
      //   <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      //     <ul class="navbar-nav">
      //       <li class="nav-item active">
      //       <Link to = '/'><div class="nav-link"><strong>Home</strong></div></Link>
      //       </li>
      //       <li class="nav-item">
      //       <Link to = '/about'><div class="nav-link"><strong>AboutMe</strong></div></Link>
      //       </li>
      //       <li class="nav-item">
      //       <Link to = '/resume'><div class="nav-link"><strong>Resume</strong></div></Link>
      //       </li>
      //       <li class="nav-item">
      //       <Link to = '/projects'><div class="nav-link"><strong>Projects</strong></div></Link>
      //       </li>
      //       <li class="nav-item">
      //       <Link to = '/contact'><div class="nav-link"><strong>ContactMe</strong></div></Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
  
  )
}
