import React from 'react';

const Footer = () => (
  <footer style={{background: 'var(--color-primary)', color: 'var(--color-bg)', padding: '2rem 0', borderRadius: '32px 32px 0 0', marginTop: 32}}>
    <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontFamily: 'Poppins', fontWeight: 900, fontSize: 22, display: 'inline-flex', alignItems: 'flex-end', gap: 5}}>
        WiseMount
        <span style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 12,
          marginLeft: 4,
          marginBottom: 1,
          letterSpacing: '0.02em',
          opacity: 0.8,
        }}>Pvt Ltd</span>
      </div>
      <div style={{fontFamily: 'Open Sans', fontSize: 16}}>
        <span style={{marginRight: 16}}>info@wisemount.com</span>
        <span style={{marginRight: 16}}>+91-12345-67890</span>
        <span>123 Tech Park, Bengaluru</span>
      </div>
      <div style={{marginTop: 12}}>
        <a href="#" style={{color: '#fff', marginRight: 12, textDecoration: 'none'}}>LinkedIn</a>
        <a href="#" style={{color: '#fff', marginRight: 12, textDecoration: 'none'}}>Twitter</a>
        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Facebook</a>
      </div>
    </div>
    <div style={{textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--color-secondary)'}}>
      &copy; {new Date().getFullYear()} WiseMount <span style={{fontSize:12, opacity:0.8, marginLeft:2}}>Pvt Ltd</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;
