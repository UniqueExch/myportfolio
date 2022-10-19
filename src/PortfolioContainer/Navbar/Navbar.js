import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>


<nav class="navbar navbar-expand-lg navbar-light">
<Link to = '/'><div class="nav-link text-white"><h1><stromg>UNIQUELORD</stromg></h1></div></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to = '/'><div class="nav-link"><strong>Home</strong></div></Link>
      </li>
      <li class="nav-item">
      <Link to = '/about'><div class="nav-link"><strong>AboutMe</strong></div></Link>
      </li>
      <li class="nav-item">
      <Link to = '/resume'><div class="nav-link"><strong>Resume</strong></div></Link>
      </li>
      <li class="nav-item">
      <Link to = '/testimonial'><div class="nav-link"><strong>Testimonial</strong></div></Link>
      </li>
      <li class="nav-item">
      <Link to = '/contact'><div class="nav-link"><strong>ContactMe</strong></div></Link>
      </li>
    </ul>
  </div>
</nav>





              {/* <nav class="navbar navbar-light bg-secondary">
                <a class="navbar-brand text-light" href="#"><stromg><h1>UNIQUELORD</h1></stromg></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul class="navbar-nav ">
                   <li class="nav-item ">
                    <Link to = '/'><div class="nav-link">Home</div></Link>
                    </li>
                    <li class="nav-item">
                    <Link to = '/about'><div class="nav-link">About</div></Link>
                    </li>
                    <li class="nav-item">
                    <Link to = '/contact'><div class="nav-link">Contact</div></Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li> 
                  </ul>
                </div>
              </nav> */}


{/* 
        <ul class="nav nav-tabs bg-light justify-content-end">                
                <li class="nav-item">
                    <Link to = '/'><div class="nav-link">Home</div></Link>
                </li>

                <li class="nav-item">
                    <Link to = '/about'><div class="nav-link">About</div></Link>
                </li>  

                <li class="nav-item">
                    <Link to = '/contact'><div class="nav-link">Contact</div></Link>
                </li>               
            </ul> */}
    </div>
  )
}
