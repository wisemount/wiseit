import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100vw',
    background: 'var(--color-primary)', 
    color: 'var(--color-bg)', 
    padding: 'clamp(2rem, 4vw, 3rem) max(1rem, 2vw)', 
    borderRadius: '32px 32px 0 0', 
    marginTop: 32,
    boxSizing: 'border-box',
    margin: '32px 0 0 0'
  }}>
    <div style={{
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        fontFamily: 'Poppins', 
        fontWeight: 900, 
        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
        display: 'inline-flex', 
        alignItems: 'flex-end', 
        gap: 5
      }}>
        WiseMount
        <span style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 'clamp(10px, 2vw, 12px)',
          marginLeft: 4,
          marginBottom: 1,
          letterSpacing: '0.02em',
          opacity: 0.8,
        }}>Pvt Ltd</span>
      </div>
      <div style={{
        fontFamily: 'Open Sans', 
        fontSize: 'clamp(12px, 2.5vw, 16px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <span>info@wisemount.com</span>
        <span>+91-12345-67890</span>
        <span>123 Tech Park, Bengaluru</span>
      </div>
      <div style={{marginTop: 12}}>
        <a href="#" style={{color: '#fff', marginRight: 12, textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)'}}>LinkedIn</a>
        <a href="#" style={{color: '#fff', marginRight: 12, textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)'}}>Twitter</a>
        <a href="#" style={{color: '#fff', textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)'}}>Facebook</a>
      </div>
    </div>
    <div style={{
      textAlign: 'center', 
      marginTop: 24, 
      fontSize: 'clamp(12px, 2vw, 14px)', 
      color: 'var(--color-secondary)',
      maxWidth: '1200px',
      margin: '24px auto 0 auto'
    }}>
      &copy; {new Date().getFullYear()} WiseMount <span style={{fontSize:'clamp(10px, 1.5vw, 12px)', opacity:0.8, marginLeft:2}}>Pvt Ltd</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;
