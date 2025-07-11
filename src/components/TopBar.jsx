import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopBar = () => (
  <div style={{
    width: '100vw',
    background: 'linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(124,58,237,0.95) 100%)',
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: '12px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '6px 1rem',
    letterSpacing: 0.3,
    zIndex: 1200,
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '36px',
    margin: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)'
  }}>
    {/* Contact Icons + Social Media - All Right Aligned */}
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }}>
      {/* Primary Contact Icons */}
      <a 
        href="mailto:wisemount@outlook.com"
        style={{
          color: '#F97316',
          textDecoration: 'none',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          padding: '4px',
          borderRadius: '4px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = 'transparent';
        }}
        title="Send us an email"
      >
        <i className="bi bi-envelope-fill"></i>
      </a>
      <a 
        href="https://wa.me/918939677189?text=Hi%20WiseMount%2C%20I%20am%20reaching%20out%20from%20your%20website%20to%20learn%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#25D366',
          textDecoration: 'none',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          padding: '4px',
          borderRadius: '4px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = 'transparent';
        }}
        title="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a 
        href="tel:+918939677189"
        style={{
          color: '#06B6D4',
          textDecoration: 'none',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          padding: '4px',
          borderRadius: '4px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = 'transparent';
        }}
        title="Call us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
      
      {/* Separator */}
      <div style={{
        width: '1px',
        height: '16px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        margin: '0 4px'
      }}></div>
      
      {/* Social Media Icons */}
      <a href="https://www.linkedin.com/company/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#0077B5', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="LinkedIn" title="Follow us on LinkedIn">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://twitter.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#1DA1F2', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="Twitter" title="Follow us on Twitter">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="https://www.facebook.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#1877F2', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="Facebook" title="Like us on Facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://www.youtube.com/c/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#FF0000', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="YouTube" title="Subscribe to our YouTube">
        <i className="bi bi-youtube"></i>
      </a>
      <a href="https://www.instagram.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#E4405F', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="Instagram" title="Follow us on Instagram">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://www.pinterest.com/wisemount" target="_blank" rel="noopener noreferrer" style={{color: '#BD081C', textDecoration: 'none', fontSize: '14px', padding: '2px', transition: 'all 0.3s ease', borderRadius: '3px'}} aria-label="Pinterest" title="Follow us on Pinterest">
        <i className="bi bi-pinterest"></i>
      </a>
    </div>
  </div>
);

export default TopBar;
