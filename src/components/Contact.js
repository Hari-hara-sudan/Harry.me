import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS for sending emails

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0var6md', // Replace with your EmailJS service ID
      'template_k1c3m26', // Replace with your EmailJS template ID
      e.target,
      'sz9lOLFoxcwf1RWCHIZeS' // Replace with your EmailJS user ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true); // Indicate success
        setError(false); // Reset error state
      }, (error) => {
        console.log('Email send failed:', error.text);
        setError(true); // Indicate an error
      });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 data-aos="fade-down">Get in Touch</h2>
      <form onSubmit={handleSubmit} data-aos="fade-right" data-aos-delay="200">
        <label htmlFor="name" data-aos="fade-right">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-aos="fade-down"
          data-aos-delay="300"
          required
          placeholder="Your Name"
        />
        <label htmlFor="email" data-aos="fade-right">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-aos="fade-up"
          data-aos-delay="400"
          required
          placeholder="Your Email"
        />
        <label htmlFor="message" data-aos="fade-right">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          data-aos="fade-up"
          data-aos-delay="500"
          required
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send</button>
        
        {/* Display success or error messages */}
        {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        {error && <p className="error-message">Oops! Something went wrong, please try again.</p>}
      </form>
    </section>
  );
}

export default Contact;
