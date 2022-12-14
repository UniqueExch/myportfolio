import React from 'react'
import "./Resume.css"
import { Col, Row } from 'react-bootstrap';


export default function Resume() {
  return (
    <div className='container'>
     
        <span className='text'>
                  <strong>RESUME</strong>
            </span>
            <span className='text-content'>
                <strong>MY FORMAL BIO DETAILS</strong>
            </span>
            

        <Row>
          <Col md={4}>
            <div className='resume-details'> 
                     <i className="bi bi-mortarboard setup"></i> <br/> 
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Education</strong>
                    </span>
                </div>
                  <br/> 
                   <i className="bi bi-journals setup"></i> <br/> 
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Work</strong>
                    </span>
                </div> 
                  <br/> 
                  <i className="bi bi-pc-display-horizontal setup"></i><br/>
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Programming Skills</strong>
                    </span>
                </div>
                  <br/> 
                  <i className="bi bi-stack setup"></i> <br/>  
                <div className='text-wrap'>
                  <span className='education-text'> <strong>Projects</strong>
                  </span>
                </div>
                 <br/> 
                  <i className="bi bi-palette setup"></i> <br/>  
                <div className='text-wrap'>
                  <span className='education-text'> <strong>Interests</strong>
                  </span>
                </div>
            </div>
          </Col>

          <Col md={8}>
                <div className='resume-details-container'>
                <p className='duration'>2012-2016</p> 
                  <div className='education-history'>      
                      <li className='school'><strong>MOUAU</strong></li>
                      <strong className='school-text'>Bachelor of Science Computer Science</strong>       
                   </div>   
                   <p className='duration1'>2015-2016</p> 
                  <div className='education-history1'>      
                      <li className='school'><strong>Industrial Training</strong></li>
                      <strong className='school-text'>ADMA'S Computer training School PortHarcourt</strong>       
                   </div>  
                   <p className='duration2'>Ongoing</p> 
                  <div className='education-history2'>      
                      <li className='school'><strong>Diploma In Computer</strong></li>
                      <strong className='school-text'>AltSchoolAfrica</strong>       
                   </div>  
                        <p className='duration3'>2002-2008</p> 
                  <div className='education-history3'>      
                      <li className='school'><strong>High School</strong></li>
                      <strong className='school-text'>Community Secondary School Opi-Agu</strong>       
                   </div>   
                </div>      
          </Col>
        </Row>
    </div>
  )
}
