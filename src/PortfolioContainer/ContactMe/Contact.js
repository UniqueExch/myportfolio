import React from 'react'
import "./Contact.css";

export default function Contact() {
  return (

      

    <div>
    <span className='textme'>
           <h3><strong>Contact Me</strong></h3>
            </span>
            <span className='lets'>
            <p>Let's Keep In Touch!</p>
            </span>
    <div className='contact-container'>
      <div className='metext'>

      </div>
      <div className='form-details'>
      <form>
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input type="email" class="form-control" id="exampleInputName" aria-describedby="name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email;</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputMessage">Message</label>
            <input type="message" class="form-control" id="exampleInputMessage"/>
          </div>
          <button type="submit" class="btn-send">Submit</button>
        </form>
      </div>
      <span className='contact-text'>
        <h3><strong >Get In Touch</strong></h3>
        <i class='fa fa-envelope-o color-info' ></i>
        </span>
           <div className='colz-parent'>
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
                </div>
                <span className='send-here'>
                    <p>Send Your Email Here!</p>
                </span>
                <div className="bgimg">
                    <img src={require('../../assets/Home/icon.jpg')}
                        alt='No internet connection'/> 
                  </div>
                  </div>
                 
    </div>
  )
}



// import React from 'react'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact(){
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           alert("message sent succesfully");
//       }, (error) => {
//         alert("failed to send message");
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };


