import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
    
    if (formRef.current) {
        gsap.from(formRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: formRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    // Replace with your actual form submission logic (e.g., using EmailJS, Formspree, or a backend)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmitMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setSubmitMessage('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Element name="contact" className="section contact-section" ref={sectionRef}>
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <button type="submit" className="btn btn-primary contact-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && <p className={`submit-message ${submitMessage.includes('Sorry') ? 'error' : 'success'}`}>{submitMessage}</p>}
      </form>
      <div className="contact-details">
        <p>Email: <a href="mailto:diwakarshaw1706@gmail.com">diwakarshaw1706@gmail.com</a></p>
        {/* Add other contact details like phone or social media direct links if desired */}
      </div>
    </Element>
  );
};

export default Contact;
