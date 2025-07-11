import React from 'react';

const CallToAction = () => (
  <section style={{padding: '3rem 0', textAlign: 'center'}}>
    <h2 style={{fontFamily: 'Poppins', fontWeight: 900, fontSize: 32, color: 'var(--color-primary)', marginBottom: 16}}>
      Ready to Wise Up Your Business?
    </h2>
    <p style={{fontFamily: 'Open Sans', fontSize: 18, marginBottom: 24}}>
      Contact us today to start your digital transformation journey.
    </p>
    <a href="#contact" className="btn" style={{
      background: 'var(--color-secondary)',
      color: '#fff',
      padding: '0.75rem 2.5rem',
      fontSize: 20,
      fontWeight: 700,
      border: 'none',
      borderRadius: 8,
      textDecoration: 'none',
      boxShadow: '0 2px 8px rgba(255,107,53,0.12)',
      transition: 'background 0.2s',
      cursor: 'pointer',
    }}>
      Contact Us
    </a>
  </section>
);

export default CallToAction;
