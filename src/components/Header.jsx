import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wisemount-logo.png';
import wmheader1 from '../assets/wmheader1.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      width: '100%',
      padding: '1rem', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(34, 42, 15, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRadius: '0 0 24px 24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backgroundImage: `url(${wmheader1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <div style={{display: 'flex', alignItems: 'center', flexShrink: 0, minWidth: 0}}>
        <div style={{
          position: 'relative',
          padding: '5px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
          marginRight: '1rem'
        }}>
          <img src={logo} alt="WiseMount" style={{
            width: '60px', 
            height: '60px', 
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
              fontSize: '1.5rem',
              letterSpacing: 1.5,
              color: '#fffde4',
              background: 'none',
              display: 'inline-block',
              textTransform: 'uppercase',
              marginRight: 8,
              filter: 'drop-shadow(0 2px 0 #000) drop-shadow(0 4px 12px #ffe066) drop-shadow(0 8px 24px #ffd700)',
              textShadow: '-2px 0 2px #000, 0 2px 2px #000, 2px 0 2px #000, 0 -2px 2px #000, 0 0 8px #ffe066',
              position: 'relative',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            WISEMOUNT
          </span>
          <span style={{
            fontSize: '10px',
            fontWeight: 600,
            color: '#ffe066',
            verticalAlign: 'justify',
            marginLeft: 2,
            position: 'relative',
            top: 2,
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
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        minWidth: 0
      }} className="desktop-nav">
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#products" style={navLinkStyle}>Products</a>
        <div style={{position: 'relative'}}>
          <button style={{...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer'}}>Products ▼</button>
          <div style={{position: 'absolute', top: '2.5rem', left: 0, background: '#23232b', borderRadius: 8, boxShadow: '0 2px 12px #0002', minWidth: 180, zIndex: 100}}>
            <Link to="/wisestudio" style={{...navLinkStyle, display: 'block', padding: '12px 16px'}}>WiseStudio</Link>
            {/* Add more product links here as needed */}
          </div>
        </div>
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
          <Link to="/wisestudio" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>WiseStudio</Link>
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
  fontSize: '14px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  padding: '8px 12px',
  borderRadius: '8px',
  whiteSpace: 'nowrap',
};

const ctaButtonStyle = {
  background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '12px',
  fontWeight: 700,
  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
  transform: 'translateY(0)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default Header;
