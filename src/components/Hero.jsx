import React, { useState, useEffect } from 'react';

const Hero = ({ theme, toggleTheme }) => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Smart Solutions for 12 Sectors",
    "Digital Transformation Made Simple",
    "Innovation Across Industries",
    "Empowering Global Businesses"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 25%, #7C3AED 75%, #EC4899 100%)',
      color: '#fff',
      padding: '8rem 0 6rem 0',
      textAlign: 'center',
      borderRadius: '0 0 48px 48px',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse'
      }} />
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div style={{
          display: 'inline-block',
          padding: '8px 24px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{
            fontFamily: 'Open Sans',
            fontSize: 14,
            fontWeight: 600,
            color: '#06B6D4'
          }}>🚀 Trusted by 100+ Companies Globally</span>
        </div>
        <h1
          style={{
            fontFamily: 'Poppins',
            fontWeight: 900,
            fontSize: 48,
            margin: 0,
            color: theme === 'light' ? '#1E293B' : '#fff',
            textAlign: 'center',
            letterSpacing: 1.5,
            lineHeight: 1.1,
          }}
        >
          {taglines[currentTagline]}
        </h1>
        <p style={{
          fontFamily: 'Open Sans', 
          fontSize: 22, 
          fontWeight: 400, 
          maxWidth: 700, 
          margin: '0 auto 3rem auto',
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Transforming businesses worldwide with cutting-edge technology solutions across healthcare, retail, finance, HR, and 8 more sectors.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem'}}>
          <button style={{
            padding: '16px 32px',
            fontSize: 18,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
            border: 'none',
            borderRadius: '16px',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'translateY(0)'
          }}>
            Explore Products
          </button>
          <button style={{
            padding: '16px 32px',
            fontSize: 18,
            fontWeight: 700,
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            color: '#fff',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            Watch Demo
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
