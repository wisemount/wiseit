import React, { useState } from 'react';
import logo from '../assets/wmlogoo.png';
import wmheader2 from '../assets/wmheader-2.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      width: '100%',
      padding: 'clamp(0.75rem, 2vw, 1rem)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'fixed',
      top: '36px',
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(34, 42, 15, 0.95)',
      backdropFilter: 'blur(20px)',
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      backgroundImage: `url(${wmheader2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      minHeight: 'clamp(70px, 8vw, 80px)',
    }}>
      <div style={{display: 'flex', alignItems: 'center', flexShrink: 0, minWidth: 0}}>
        <div style={{
          position: 'relative',
          padding: '4px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
          marginRight: 'clamp(0.5rem, 2vw, 1rem)',
          flexShrink: 0
        }}>
          <img src={logo} alt="WiseMount" style={{
            width: 'clamp(45px, 8vw, 60px)', 
            height: 'clamp(45px, 8vw, 60px)', 
            objectFit: 'contain',
            borderRadius: '4px',
            filter: 'brightness(1.1)'
          }} />
        </div>
        <div style={{minWidth: 0}}>
          <span
            style={{
              fontFamily: 'Exo 2',
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              letterSpacing: 1.2,
              color: '#fffde4',
              background: 'none',
              display: 'inline-block',
              textTransform: 'uppercase',
              marginRight: 6,
              filter: 'drop-shadow(0 2px 0 #000) drop-shadow(0 4px 12px #ffe066) drop-shadow(0 8px 24px #ffd700)',
              textShadow: '-2px 0 2px #000, 0 2px 2px #000, 2px 0 2px #000, 0 -2px 2px #000, 0 0 8px #ffe066',
              position: 'relative',
              whiteSpace: 'nowrap',
            }}
          >
            WISEMOUNT
          </span>
          <span style={{
            fontSize: 'clamp(8px, 1.5vw, 10px)',
            fontWeight: 600,
            color: '#ffe066',
            verticalAlign: 'top',
            marginLeft: 2,
            position: 'relative',
            top: -1,
            whiteSpace: 'nowrap',
          }}>
            Pvt Ltd
          </span>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>

      <nav style={{
        display: 'flex', 
        alignItems: 'center', 
        gap: 'clamp(0.5rem, 2vw, 1.2rem)',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        flexShrink: 0
      }} className="desktop-nav">
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#products" style={navLinkStyle}>Products</a>
        <a href="#services" style={navLinkStyle}>Services</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#contact" style={{...navLinkStyle, ...ctaButtonStyle}}>Contact</a>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(34, 42, 15, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '1rem',
          borderRadius: '0 0 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }} className="mobile-nav">
          <a href="#home" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#products" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#services" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" style={{...navLinkStyle, ...ctaButtonStyle}} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

const navLinkStyle = {
  fontFamily: 'Open Sans',
  fontWeight: 600,
  color: '#E2E8F0',
  textDecoration: 'none',
  fontSize: 'clamp(12px, 2vw, 14px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  padding: 'clamp(6px, 1.5vw, 8px) clamp(8px, 2vw, 12px)',
  borderRadius: '8px',
  whiteSpace: 'nowrap',
};

const ctaButtonStyle = {
  background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
  color: '#fff',
  padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)',
  borderRadius: '12px',
  fontWeight: 700,
  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
  transform: 'translateY(0)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default Header;
