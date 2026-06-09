/* ============================================
   SIMPLE COMPONENT #5: CONTACT SECTION
   
   EXPLANATION FOR BEGINNERS:
   - Demonstrates form handling with React
   - Uses useState to manage form input values
   - Shows how to handle form submission
   - This is a fundamental React pattern
   ============================================ */

import React, { useState } from 'react';

function ContactSection() {
  const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    state: 'idle',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send message right now.');
      }

      setStatus({ state: 'success', message: 'Thanks for your message! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'Something went wrong while sending your message.'
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#666' }}>
        📧 spencer.blackler@yahoo.co.uk | 📱 07599284026
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
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
          <label htmlFor="email">Your Email</label>
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
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={status.state === 'loading'}>
          {status.state === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status.state === 'success' && (
        <p style={{ color: '#0891b2', marginTop: '1rem', fontWeight: 'bold' }}>
          ✅ {status.message}
        </p>
      )}

      {status.state === 'error' && (
        <p style={{ color: '#dc2626', marginTop: '1rem', fontWeight: 'bold' }}>
          ⚠️ {status.message}
        </p>
      )}
    </section>
  );
}

export default ContactSection;
