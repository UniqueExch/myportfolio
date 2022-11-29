import React, { useRef, useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { Row, Col} from 'react-bootstrap'




function Contact(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_n8gz29i', 'template_1k50ton', form.current, 'twrQqui8ieqdhH9Ag')
    .then((result) => {
        console.log(result.text);
        console.log("Message sent")
    }, (error) => {
        console.log(error.text);    
      }
    
    );
       
  };


  return (


    <div className='container'>
      <span className='textcontent'>
            <strong>CONTACT</strong>
      </span>
      <span className='text-content'>
          <strong>GET IN TOUCH</strong>
      </span>


      <Row>
        <Col md={4}>
          <div className='contact-setup'>
            <a href="https://wa.me/+2348100204801">
              <h2><i class="bi bi-whatsapp text-danger"></i></h2>
            </a>
            <span className='phone'>
              <strong>PHONE</strong>
            </span>
            <span className='number'>
              <strong>+2348100204801</strong>
            </span><br/>
          </div>
        </Col>


        <Col md={4}>
          <div className='contact-setup'>
            <h2><i class="bi bi-envelope text-danger"></i></h2>
            <span className='phone'>
                  <strong>EMAIL</strong>
              </span>
                  <span className='number'>
              <strong>onuorahsylvester01@gmail.com</strong>  
            </span><br/>
          </div>
        </Col>


        <Col md={4}>
          <div className='contact-setup'>
            <h2><i class="bi bi-house text-danger"></i></h2>
            <span className='phone'>
              <strong>ADDRESS</strong>
            </span>
            <span className='number'>
              <strong>ICT, University of Nigeria</strong>
            </span>
            <strong>Nsukka</strong>
          </div>
        </Col> 
      </Row>
      <br/>
      <br/>
    
   
      <div className='container'>
          <Row>

            <Col md={6}>         
                <div className='form-setup'>
                  <h6>Send your message here and I will reply you as soon as possible.
                    Contact me today for all your tech projects.
                  </h6>
                <img style={{width: 555, height: 223 }} src={require('../../assets/Home/icon2.jpg')}
                      alt="placeholder image" class="img-fluid"/> 
                 
                </div>     
            </Col>


            <Col md={6}>
              <div className='form-setup' >
                <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name:" name="fullname" required/>
                    </div>
                    <div class="form-group">
                        <input type="email"  class="form-control" placeholder="Your Email:" name="email" required/>
                    </div>
                    <div class="form-group">
                        <input type="text"  class="form-control" placeholder="Your Subject:" name="subject" required/>
                    </div>
                    <div className='card5'>
                       <textarea name="message" class="form-control1"  placeholder="Your Message..."  required></textarea>
                     </div>
                     <input type="submit" className='btn-send' value="Send" />
                </form>   
              </div>
            </Col>
          </Row>
      </div>          
    </div>
  )
}
export default Contact
 