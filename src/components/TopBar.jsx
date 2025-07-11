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
    justifyContent: 'space-between',
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
    {/* Contact Information */}
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      flexWrap: 'wrap',
      flex: 1,
      minWidth: 0
    }}>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', minWidth: 0}}>
        <i className="bi bi-telephone-fill" style={{fontSize: '12px', color: '#06B6D4'}}></i>
        <a href="tel:+918939677189" style={{color: '#E2E8F0', textDecoration: 'none', fontSize: '11px'}}>+91 8939677189</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', minWidth: 0}}>
        <i className="bi bi-envelope-fill" style={{fontSize: '12px', color: '#F97316'}}></i>
        <a href="mailto:wisemount@outlook.com" style={{color: '#E2E8F0', textDecoration: 'none', fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis'}}>wisemount@outlook.com</a>
      </span>
      <span style={{display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap'}}>
        <i className="bi bi-whatsapp" style={{fontSize: '12px', color: '#10B981'}}></i>
        <a href="https://wa.me/918939677189" target="_blank" rel="noopener noreferrer" style={{color: '#E2E8F0', textDecoration: 'none', fontSize: '11px'}}>WhatsApp</a>
      </span>
    </div>

    {/* Social Media Engagement */}
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px',
      flexShrink: 0,
      flexWrap: 'wrap'
    }}>
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
