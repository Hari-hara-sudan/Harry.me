import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 data-aos="fade-down">Get in Touch</h2>
      <form data-aos="fade-right" data-aos-delay="200">
        <label htmlFor="name" data-aos="fade-right">Name:</label>
        <input type="text" id="name" name="name" data-aos="fade-down" data-aos-delay="300" />
        <label htmlFor="Email" data-aos="fade-right">Email</label>
        <input type="text" name="Email" id="Email"  data-aos="fade-up" data-aos-delay="400"/>
        <label htmlFor="message" data-aos="fade-right">Message:</label>
        <textarea id="message" name="message" data-aos="fade-up" data-aos-delay="500"></textarea>
        <button type="button" >Send</button>
      </form>
    </section>
  );
}

export default Contact;
