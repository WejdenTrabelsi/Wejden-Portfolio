import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_yd04v7n', // Replace with your EmailJS Service ID
        'template_sjjm1lq', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'Bhp7lYQEUr7BvQwye' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Thank you for your message! I will get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm currently looking for a 3-month end-of-studies internship (PFE) 
              where I can contribute to exciting projects in business intelligence, 
              web development, or data analysis.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>trabelsiwejden911@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>25 129 547</span>
              </div>
            </div>

            
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
            
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;