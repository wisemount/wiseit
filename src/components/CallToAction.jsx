import React, { useState, useEffect } from 'react';

const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  // Device detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Copy to clipboard functionality
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setSuccessMessage('📞 Phone number copied to clipboard!');
      } else if (type === 'email') {
        setSuccessMessage('✉️ Email copied to clipboard!');
      }
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Handle phone call button
  const handleCallClick = () => {
    if (isMobile) {
      window.location.href = 'tel:+918939677189';
    } else {
      setShowNumber(!showNumber);
      if (!showNumber) {
        copyToClipboard('+91 89396 77189', 'phone');
      }
    }
  };

  // Handle email button
  const handleEmailClick = () => {
    if (isMobile) {
      window.location.href = 'mailto:wisemount@outlook.com';
    } else {
      setShowEmail(!showEmail);
      if (!showEmail) {
        copyToClipboard('wisemount@outlook.com', 'email');
      }
    }
  };

  // Handle email subscription
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSuccessMessage('❌ Please enter a valid email address');
      setTimeout(() => setSuccessMessage(''), 3000);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call (replace with your actual subscription logic)
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('🎉 Successfully subscribed to our newsletter!');
      setEmail('');
      setTimeout(() => setSuccessMessage(''), 5000);
    }, 2000);
  };

  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #b108b6 0%, #6610F2 100%)',
      color: '#fff',
      fontFamily: 'Poppins'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Main Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'Poppins',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#fff',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Ready to Wise Up Your Business?
          </h2>
          <p style={{
            fontFamily: 'Open Sans',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Contact us today to start your digital transformation journey.
          </p>
        </div>

        {/* Contact Buttons Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          {/* Call Button */}
          <button
            onClick={handleCallClick}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📞 Call Us
            {showNumber && !isMobile && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                color: '#333',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10,
                marginTop: '0.5rem',
                whiteSpace: 'nowrap'
              }}>
                +91 89396 77189 (Copied!)
              </div>
            )}
          </button>

          {/* Email Button */}
          <button
            onClick={handleEmailClick}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ✉️ Mail Us
            {showEmail && !isMobile && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                color: '#333',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10,
                marginTop: '0.5rem',
                whiteSpace: 'nowrap'
              }}>
                wisemount@outlook.com (Copied!)
              </div>
            )}
          </button>
        </div>

        {/* WhatsApp Section */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          <h3 style={{
            color: '#25D366',
            fontWeight: '700',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            🚀 Join Our WhatsApp Communities
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {/* Product News Group */}
            <a
              href="https://chat.whatsapp.com/GU6p03TISc8FItJpmbIMrr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                color: '#fff',
                padding: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'block',
                fontWeight: '600'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📢 Join for Product News & Updates
            </a>

            {/* Career Group */}
            <a
              href="https://chat.whatsapp.com/GyBkFuwg7ho9J3uqDZOT8W"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                color: '#fff',
                padding: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'block',
                fontWeight: '600'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              💼 Join Career & Internship Group
            </a>
          </div>
        </div>

        {/* Email Subscription */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontWeight: '700',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            📧 Stay Updated with Our Newsletter
          </h3>
          
          <form onSubmit={handleEmailSubmit} style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            alignItems: 'stretch'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#fff';
                e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: isLoading ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                color: '#6610F2',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.target.style.background = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isLoading ? '⏳ Subscribing...' : '📧 Mail Subscription'}
            </button>
          </form>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#25D366',
            padding: '1rem',
            borderRadius: '12px',
            textAlign: 'center',
            marginTop: '1rem',
            fontWeight: '600',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
