import React, { useState } from 'react'; 
import { Element } from 'react-scroll';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      // Simulate form submission - REPLACE WITH YOUR ACTUAL SUBMISSION LOGIC
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setSubmitMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error("Form submission error:", error); 
      setSubmitMessage('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Element name="contact" className="section contact-section-react"> {/* Added specific class */}
      <h2>Get In Touch</h2>
      <p className="contact-intro-react"> {/* Added specific class */}
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <form className="contact-form-react" onSubmit={handleSubmit}> {/* Added specific class */}
        <div className="form-group-react"> {/* Added specific class */}
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
        <button type="submit" className="btn btn-primary contact-submit-btn-react" disabled={isSubmitting}> {/* Added specific class */}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && <p className={`submit-message-react ${submitMessage.includes('Sorry') ? 'error' : 'success'}`}>{submitMessage}</p>} {/* Added specific class */}
      </form>
      <div className="contact-details-react"> {/* Added specific class */}
        <p>Email: <a href="mailto:diwakarshaw0304@gmail.com">diwakarshaw0304@gmail.com</a></p>
      </div>
    </Element>
  );
};

export default Contact;
