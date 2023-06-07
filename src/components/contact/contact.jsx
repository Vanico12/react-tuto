import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_zgcp2zr', 'template_v9q51cf', form.current, 'wQrbk5tnk-cH903zb')
      e.target.reset() 
      .then((result) => {
        console.log(result.text)
      },(error) =>{
        console.log(error.text);
      });
  };
    return (
      <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>nkafuvanic760@gmail.com</h5>
              <a
                href="mailto:nkafuvanic760@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option__icon" />
              <h4>LinkedIn</h4>
              <h5>Profile</h5>
              <a
                href="https://www.linkedin.com/in/nkafu-vanic-350351271/"
                target="_blank"
                rel="noreferrer"
              >
                Tape me on LinkedIn
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option__icon" />
              <h4>Whatsapp</h4>
              <h5>Direct message</h5>
              <a
                href="https://web.whatsapp.com/send?phone=+237652008743"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp me
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact
