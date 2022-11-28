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
                     <i class="bi bi-xbox setup text-primary"></i> <br/>   
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Education</strong>
                    </span>
                </div>
                  <br/> 
                     <i class='fa fa-user setup'></i><br/>
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Work</strong>
                    </span>
                </div> 
                  <br/> 
                     <i class='fa fa-user setup'></i> <br/> 
                <div className='text-wrap'>
                    <span className='education-text'> <strong>Programming Skills</strong>
                    </span>
                </div>
                  <br/> 
                   <i class='fa fa-user setup'></i> <br/>  
                <div className='text-wrap'>
                  <span className='education-text'> <strong>Projects</strong>
                  </span>
                </div>
                 <br/> 
                  <i class='fa fa-user setup'></i> <br/>  
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
                      <li className='school'><strong>Michael Okpara University of Agriculture,
                         Umudike</strong></li>
                      <strong className='school-text'>Bachelor of Science Computer Science</strong>       
                   </div>   
                   <p className='duration1'>2012-2016</p> 
                  <div className='education-history1'>      
                      <li className='school'><strong>Industrial Training Experience</strong></li>
                      <strong className='school-text'>ADMA'S Computer training School PortHarcourt</strong>       
                   </div>  
                   <p className='duration2'>2012-2016</p> 
                  <div className='education-history2'>      
                      <li className='school'><strong>Diploma In Computer</strong></li>
                      <strong className='school-text'>Prince Computer Academy Nsukka</strong>       
                   </div>  
                        <p className='duration3'>2012-2016</p> 
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
