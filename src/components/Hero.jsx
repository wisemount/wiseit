import React, { useState, useEffect } from 'react';
import wmfallback1 from '../assets/wmfallback1.jpg';

const Hero = ({ theme, toggleTheme }) => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const taglines = [
    "Innovate Automate Elevate",
    "Digital Unity for All Sectors & Sizes",
    "Digital Transformation Made Simple", 
    "Innovation Across Industries",
    "Empowering Global Businesses"
  ];

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Tagline rotation
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // YouTube video embed URL - extract video ID from the provided URL
  const videoId = 'l50oMHAyY3o'; // Extracted from https://youtu.be/l50oMHAyY3o
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section id="home" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      paddingTop: 'calc(116px)', // Account for fixed header
    }}>
      {/* Video Background */}
      {!isMobile && !videoError ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <iframe
            src={embedUrl}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onError={() => setVideoError(true)}
          />
        </div>
      ) : (
        // Fallback Image Background
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${wmfallback1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
      )}

      {/* Dark Overlay for Contrast - Reduced for better video visibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 100%)',
        zIndex: 2
      }} />

      {/* Content Overlay */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        {/* Trust Badge */}
        <div style={{
          display: 'inline-block',
          padding: 'clamp(8px, 2vw, 12px) clamp(20px, 4vw, 28px)',
          background: 'rgba(72, 244, 129, 0.15)',
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <span style={{
            fontFamily: 'Open Sans',
            fontSize: 'clamp(14px, 2.8vw, 18px)',
            fontWeight: 600,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}>🌐 Digital Solution for All.
             ⚡Ignited by WiseMount. </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontFamily: 'Poppins',
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          margin: 0,
          textAlign: 'center',
          letterSpacing: '1px',
          lineHeight: 1.1,
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 15%, #FFD700 30%, #FFFF00 45%, #FFD700 60%, #FFA500 75%, #FFD700 90%, #FFFF00 100%)',
          backgroundSize: '400% 400%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
          animation: 'glitter 3s ease-in-out infinite',
          // Ensure no background, border, or overlay on the text element itself
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent'
        }}>
          {taglines[currentTagline]}
        </h1>

        {/* Subheading */}
        <p style={{
          fontFamily: 'Open Sans',
          fontSize: 'clamp(18px, 3.5vw, 26px)',
          fontWeight: 500,
          maxWidth: '800px',
          margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto',
          color: '#ffffff',
          lineHeight: 1.6,
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
          opacity: 0.95
        }}>
          “WiseMount builds smart, scalable solutions for 20+ industries—driving innovation and growth.”
        </p>

        {/* Call-to-Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '0 1rem'
        }}>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: 'clamp(14px, 3.5vw, 20px) clamp(28px, 6vw, 40px)',
              fontSize: 'clamp(16px, 3.2vw, 20px)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
              border: 'none',
              borderRadius: '50px',
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              minWidth: '160px',
              whiteSpace: 'nowrap',
              textShadow: 'none'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 35px rgba(249, 115, 22, 0.5), 0 6px 12px rgba(0, 0, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(249, 115, 22, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)';
            }}
          >
            Explore Products
          </button>
          
          <button
            onClick={() => window.open('https://youtu.be/UqOUWoJCDVg', '_blank')}
            style={{
              padding: 'clamp(14px, 3.5vw, 20px) clamp(28px, 6vw, 40px)',
              fontSize: 'clamp(16px, 3.2vw, 20px)',
              fontWeight: 700,
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
              color: '#fff',
              cursor: 'pointer',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              minWidth: '140px',
              whiteSpace: 'nowrap',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
            }}
          >
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'rgba(255, 255, 255, 0.6)',
          margin: '0 auto',
          borderRadius: '1px'
        }} />
        <div style={{
          width: '6px',
          height: '6px',
          background: '#fff',
          borderRadius: '50%',
          margin: '8px auto 0',
          opacity: 0.8
        }} />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes glitter {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) brightness(1);
          }
          25% {
            background-position: 50% 0%;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) brightness(1.2);
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) brightness(1.4);
          }
          75% {
            background-position: 50% 100%;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) brightness(1.2);
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) brightness(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
