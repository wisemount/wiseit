import React from 'react';

const TopBar = () => (
  <div style={{
    width: '100%',
    background: 'rgba(30,58,138,0.95)',
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 2.5vw',
    letterSpacing: 0.2,
    zIndex: 1200,
    position: 'relative',
    minHeight: 36,
  }}>
    <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
      <span style={{display: 'flex', alignItems: 'center', gap: 6}}>
        <span role="img" aria-label="phone">📞</span>
        <a href="tel:+917418418885" style={{color: '#fff', textDecoration: 'none'}}>+91 7418418885</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6}}>
        <span role="img" aria-label="email">✉️</span>
        <a href="mailto:wisemount@outlook.com" style={{color: '#fff', textDecoration: 'none'}}>wisemount@outlook.com</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6}}>
        <span role="img" aria-label="whatsapp">🟢</span>
        <a href="https://wa.me/917418418885" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none'}}>WhatsApp</a>
      </span>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
      <a href="https://www.linkedin.com/company/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontSize: 18}} aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
      <a href="https://twitter.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontSize: 18}} aria-label="Twitter"><i className="fa-brands fa-twitter"></i> Twitter</a>
    </div>
  </div>
);

export default TopBar;
