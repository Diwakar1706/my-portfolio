import React, { useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const serviceID = 'service_03c6roq';
    const templateID = 'template_Ifes7rn';
    const publicKey = 'vdaa30GBhKUreCS7A';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSubmitMessage('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSubmitMessage('❌ Sorry, something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Element name="contact" className="section contact-section-react">
      <h2>Get In Touch</h2>
      <p className="contact-intro-react">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <form className="contact-form-react" onSubmit={handleSubmit}>
        <div className="form-group-react">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group-react">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group-react">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary contact-submit-btn-react" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && <p className={`submit-message-react ${submitMessage.includes('Sorry') ? 'error' : 'success'}`}>{submitMessage}</p>}
      </form>
      <div className="contact-details-react">
        <p>Email: <a href="mailto:diwakarshaw0304@gmail.com">diwakarshaw0304@gmail.com</a></p>
      </div>
    </Element>
  );
};

export default Contact;
