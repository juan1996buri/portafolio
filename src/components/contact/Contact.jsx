import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1o3apxk', 'service_1o3apxk', form.current, 'bL6xRXigFLACEspxE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>juanburi@gmail.com</h5>
            <a href="mailto:juanburi@gmail.com" target='_blank'>Send a messegs</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>juanburi@gmail.com</h5>
            <a href="https://m.me/juan.buri.3" target='_blank'>Send a messegs</a>
          </article>
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Whatssapp</h4>
            <h5>+593987805005</h5>
            <a href="https://api.whatsapp.com/send?phone+593987805005" target='_blank'>Send a messegs</a>
          </article>
        </div>
        {/* end of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="messege" id="7" placeholder='Your messenge' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact