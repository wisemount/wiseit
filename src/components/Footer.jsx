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
          flexDirection: 'column',
          gap: '0.5rem',
          flex: '2 1 auto',
          justifyContent: 'center',
          lineHeight: 1.4
        }}>
          <div style={{fontWeight: 600}}>WiseMount Pvt Ltd</div>
          <div>247/12-1 A, Railway Extension Road,</div>
          <div>Tenkasi-627811, Tamil Nadu, India</div>
          <div>wisemount@outlook.com</div>
          <div>+91 8939677189</div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flex: '1 1 auto',
          justifyContent: 'flex-end',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://wa.me/918939677189?text=Hi%20WiseMount%2C%20I%20am%20reaching%20out%20from%20your%20website%20to%20learn%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25D366',
              textDecoration: 'none',
              fontSize: '24px',
              transition: 'transform 0.3s ease',
              padding: '4px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            title="Chat with us on WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a 
            href="mailto:wisemount@outlook.com"
            style={{
              color: '#F97316',
              textDecoration: 'none',
              fontSize: '24px',
              transition: 'transform 0.3s ease',
              padding: '4px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            title="Send us an email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a 
            href="tel:+918939677189"
            style={{
              color: '#06B6D4',
              textDecoration: 'none',
              fontSize: '24px',
              transition: 'transform 0.3s ease',
              padding: '4px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            title="Call us"
          >
            <i className="bi bi-telephone-fill"></i>
          </a>
          <a 
            href="https://www.linkedin.com/company/wisemount"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0077B5',
              textDecoration: 'none',
              fontSize: '24px',
              transition: 'transform 0.3s ease',
              padding: '4px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            title="Follow us on LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
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
