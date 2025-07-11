import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'var(--color-primary)', 
    color: '#fff', 
    padding: 'clamp(1.5rem, 4vw, 3rem) 0', 
    borderRadius: '32px 32px 0 0', 
    marginTop: '2rem',
    boxSizing: 'border-box',
    overflow: 'hidden'
  }}>
    <div className="container">
      <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        gap: '1.5rem',
      }}>
        <div style={{
          fontFamily: 'Poppins', 
          fontWeight: 900, 
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
          display: 'flex', 
          alignItems: 'flex-end', 
          gap: 5,
          minWidth: 0,
          flex: '1 1 auto'
        }}>
          <span>WiseMount</span>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: 'clamp(10px, 2vw, 12px)',
            marginLeft: 4,
            marginBottom: 1,
            letterSpacing: '0.02em',
            opacity: 0.8,
            whiteSpace: 'nowrap'
          }}>Pvt Ltd</span>
        </div>
        
        <div style={{
          fontFamily: 'Open Sans', 
          fontSize: 'clamp(12px, 2.5vw, 16px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          flex: '2 1 auto',
          justifyContent: 'center'
        }}>
          <span style={{whiteSpace: 'nowrap'}}>info@wisemount.com</span>
          <span style={{whiteSpace: 'nowrap'}}>+91-12345-67890</span>
          <span style={{whiteSpace: 'nowrap', textAlign: 'center'}}>123 Tech Park, Bengaluru</span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flex: '1 1 auto',
          justifyContent: 'flex-end'
        }}>
          <a href="#" style={{color: '#fff', textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)', whiteSpace: 'nowrap'}}>LinkedIn</a>
          <a href="#" style={{color: '#fff', textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)', whiteSpace: 'nowrap'}}>Twitter</a>
          <a href="#" style={{color: '#fff', textDecoration: 'none', fontSize: 'clamp(12px, 2.5vw, 14px)', whiteSpace: 'nowrap'}}>Facebook</a>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center', 
        marginTop: '2rem', 
        fontSize: 'clamp(12px, 2vw, 14px)', 
        color: 'rgba(255,255,255,0.8)',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        &copy; {new Date().getFullYear()} WiseMount <span style={{fontSize:'clamp(10px, 1.5vw, 12px)', opacity:0.8, marginLeft:2}}>Pvt Ltd</span>. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
