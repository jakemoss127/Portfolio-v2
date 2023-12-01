import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import '../components/styles/contactstyles.css';
import ParticleBack from '../components/ParticleBack';

const ContactView = () => {

  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dp1gjve', 'template_vxlqhlb', form.current, 'OpTIZBLKtFa-Y2gvQ')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent!');
          // Clear messsage fields
          e.target.reset(); 
      }, (error) => {
          console.log(error.text);
          alert('An errror occurred, please try again.');
      });
  };

  return (
    <div className='container'> 
      <ParticleBack/>
      <div className="form-container">
        <Navbar/>
        <form className='email-form' ref={form} onSubmit={sendEmail}>
          <div className="card">
            <h1>Contact Me</h1>
            <label className='form-label'>Your Name</label>
            <input className='name-email' type="text" name="user_name" />
            <label className='form-label'>Your Email</label>
            <input className='name-email' type="email" name="user_email" />
            <label className='form-label'>Message</label>
            <textarea name="message" maxLength={250} placeholder="Enter a message (max 250 characters)" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input className='submit-button' type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactView