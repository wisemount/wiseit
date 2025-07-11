import React from 'react';
import './ContactForm.css';

// Replace this with your actual Google Form action URL
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdQjzLlKb_How0n25NHSRzcWARTTyjS21mBFtNkO9q3PFcsXQ/formResponse';

function ContactForm() {
  return (
    <section className="contact-form-section" id="contact">
      <h2 className="contact-form-title">Contact Us</h2>
      <form className="contact-form" action={GOOGLE_FORM_ACTION} method="POST" target="_blank" rel="noopener noreferrer">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="entry.118017157" id="name" required placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="entry.2028001218" id="email" required placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" name="entry.145389930" id="mobile" required placeholder="Your Mobile Number" pattern="[0-9]{10,15}" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="entry.49737785" id="message" rows="5" required placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit" className="contact-form-submit">Send Message</button>
      </form>
      <p className="contact-form-note">We respect your privacy. Your information is never shared.</p>
    </section>
  );
}

export default ContactForm;
