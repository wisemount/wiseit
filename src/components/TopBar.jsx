import React from 'react';

const TopBar = () => (
  <div style={{
    width: '100%',
    background: 'rgba(30,58,138,0.95)',
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 1rem',
    letterSpacing: 0.2,
    zIndex: 1200,
    position: 'relative',
    minHeight: '40px',
    margin: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
  }}>
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      flexWrap: 'wrap',
      flex: 1,
      minWidth: 0
    }}>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', minWidth: 0}}>
        <span role="img" aria-label="phone">📞</span>
        <a href="tel:+917418418885" style={{color: '#fff', textDecoration: 'none', fontSize: '13px'}}>+91 7418418885</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', minWidth: 0}}>
        <span role="img" aria-label="email">✉️</span>
        <a href="mailto:wisemount@outlook.com" style={{color: '#fff', textDecoration: 'none', fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis'}}>wisemount@outlook.com</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'}}>
        <span role="img" aria-label="whatsapp">🟢</span>
        <a href="https://wa.me/917418418885" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontSize: '13px'}}>WhatsApp</a>
      </span>
    </div>
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px',
      flexShrink: 0
    }}>
      <a href="https://www.linkedin.com/company/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontSize: '13px'}} aria-label="LinkedIn">LinkedIn</a>
      <a href="https://twitter.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontSize: '13px'}} aria-label="Twitter">Twitter</a>
    </div>
  </div>
);

export default TopBar;
