import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wisemount-logo.png';
import wmheader1 from '../assets/wmheader1.png';

const Header = () => (
  <header className="container" style={{
    padding: '2rem 0', 
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
  }}>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{
        position: 'relative',
        padding: '5px',
        borderRadius: 'px',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
        marginRight: '28px'
      }}>
        <img src={logo} alt="WiseMount" style={{
          width: 96, 
          height: 96, 
          objectFit: 'contain',
          borderRadius: '1px',
          filter: 'brightness(1.1)'
        }} />
      </div>
      <div>
        <span
          style={{
            fontFamily: 'Exo 2',
            fontWeight: 900,
            fontSize: 40,
            letterSpacing: 1.5,
            color: '#fffde4', // light yellow
            background: 'none',
            display: 'inline-block',
            textTransform: 'uppercase',
            marginRight: 8,
            filter: 'drop-shadow(0 2px 0 #000) drop-shadow(0 4px 12px #ffe066) drop-shadow(0 8px 24px #ffd700)',
            textShadow: '-2px 0 2px #000, 0 2px 2px #000, 2px 0 2px #000, 0 -2px 2px #000, 0 0 8px #ffe066',
            position: 'relative',
          }}
        >
          WISEMOUNT
        </span>
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          color: '#ffe066',
          verticalAlign: 'justify',
          marginLeft: 2,
          position: 'relative',
          top: 2,
        }}>
          Pvt Ltd
        </span>
      </div>
    </div>
    <nav style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
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
  </header>
);

const navLinkStyle = {
  fontFamily: 'Open Sans',
  fontWeight: 600,
  color: '#E2E8F0',
  textDecoration: 'none',
  fontSize: 16,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  padding: '8px 16px',
  borderRadius: '8px',
};

const ctaButtonStyle = {
  background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '12px',
  fontWeight: 700,
  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
  transform: 'translateY(0)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default Header;
