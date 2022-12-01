import React from 'react'
import "./About.css"
import { Row, Col} from 'react-bootstrap'

export default function About() {
  return (



      <div className='container'>
          <span className='texts'>
            <strong>ABOUT ME</strong>
          </span>
          <span className='text-content'>
             <strong>WHY CHOOSE ME?</strong>
          </span>
            <br/>
            <br/>
            
        <Row>
          <Col md={6}>
            <div className='about-content'>
              <img style={{width: 555, height: 600 }} src={require('../../assets/Home/about.jpg')}
                      alt="placeholder" className="img-fluid"/> 
            </div >
          </Col>


         <Col md={6}>
            <div className='about-content'>
              <p className="card-text"> <br/>Full stack web and mobile developer
                    with background knowledge of MERN stack applications with utmost effeciency.
                    Strong professional with
                    a BSc willing to be an asset for an organization.</p>
                    <br/>
                    <br/>
                    <br/>
                    <ul>
                        <strong>Here are some few highlights:</strong>
                        <li>Full stack web and mobile development</li>
                        <li>Interactive Front End as per the design</li>
                        <li>React and React Native</li>
                        <li>Redux for State Management</li>
                        <li>Buiding REST API</li>
                        <li>Managing Database</li>
                        </ul>
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
             </div>
          </Col>
        </Row>
      </div>
  )
}
