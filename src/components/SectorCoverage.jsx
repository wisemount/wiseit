import React, { useState } from 'react';

const sectors = [
  { name: 'AI Solutions', icon: '🤖', color: '#6366F1', description: 'AI-powered automation, analytics, and smart business tools' },
  { name: 'Healthcare', icon: '🏥', color: '#06B6D4', description: 'Patient management, EMR, telemedicine solutions' },
  { name: 'Retail', icon: '🛍️', color: '#F97316', description: 'E-commerce, inventory, customer management' },
  { name: 'Education', icon: '🎓', color: '#7C3AED', description: 'Learning management, online courses, assessments' },
  { name: 'Manufacturing', icon: '🏭', color: '#EC4899', description: 'Production planning, quality control, supply chain' },
  { name: 'Logistics', icon: '🚚', color: '#1E3A8A', description: 'Fleet management, route optimization, tracking' },
  { name: 'Hospitality', icon: '🏨', color: '#F97316', description: 'Hotel management, booking systems, guest services' },
  { name: 'Real Estate', icon: '🏠', color: '#06B6D4', description: 'Property management, CRM, virtual tours' },
  { name: 'Legal', icon: '⚖️', color: '#7C3AED', description: 'Case management, document automation, billing' },
  { name: 'Automotive', icon: '🚗', color: '#10B981', description: 'Dealership management, service scheduling, inventory' },
  { name: 'Agriculture', icon: '🌾', color: '#EC4899', description: 'Farm management, crop monitoring, supply chain' },
  { name: 'IT Services', icon: '💻', color: '#1E3A8A', description: 'Project management, resource planning, billing' },
  // New sectors row
  { name: 'Marine Tech', icon: '⚓', color: '#0EA5E9', description: 'Maritime logistics, fleet, and port management' },
  { name: 'Export & Import', icon: '🚢', color: '#F59E42', description: 'Global trade, customs, and supply chain solutions' },
  { name: 'Green, Bio and Deep Tech', icon: '🧬', color: '#22C55E', description: 'Sustainable, biotech, and advanced R&D platforms' },
  { name: 'Trading', icon: '📈', color: '#FACC15', description: 'Commodity, stock, and goods trading management' },
];

const SectorCoverage = () => {
  const [hoveredSector, setHoveredSector] = useState(null);
  const theme = 'light'; // This should be derived from your app's context or state

  return (
    <section className="container" style={{padding: '4rem 0'}}>
      <div style={{textAlign: 'center', marginBottom: '4rem'}}>
        <div style={{
          display: 'inline-block',
          padding: '8px 24px',
          background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
          borderRadius: '30px',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontFamily: 'Open Sans',
            fontSize: 14,
            fontWeight: 600,
            color: '#fff'
          }}>Global Coverage</span>
        </div>
        <h2 style={{
          fontFamily: 'Poppins', 
          fontWeight: 900, 
          fontSize: 48, 
          background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #7C3AED 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 16
        }}>
          "One Ecosystem. All Sectors."
        </h2>
        <p style={{
          fontFamily: 'Open Sans',
          fontSize: 18,
          color: '#94A3B8',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Building seamless digital ecosystems that drive efficiency and innovation across all sectors.
        </p>
      </div>

      {/* Interactive Sector Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
        marginBottom: '3rem'
      }}>
        {sectors.map((sector, index) => (
          <div 
            key={sector.name}
            onMouseEnter={() => setHoveredSector(index)}
            onMouseLeave={() => setHoveredSector(null)}
            style={{
              background: hoveredSector === index 
                ? `linear-gradient(135deg, ${sector.color}20 0%, ${sector.color}10 100%)`
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: hoveredSector === index 
                ? `2px solid ${sector.color}` 
                : '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredSector === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
              cursor: 'pointer',
              backdropFilter: 'blur(20px)',
              boxShadow: hoveredSector === index 
                ? `0 20px 40px ${sector.color}20` 
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
            }}
          >
            <div style={{
              fontSize: 48,
              marginBottom: '1rem',
              transform: hoveredSector === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}>
              {sector.icon}
            </div>
            <h3 style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 24,
              color: '#F1F5F9',
              margin: '0 0 12px 0'
            }}>
              {sector.name}
            </h3>
            <p style={{
              fontFamily: 'Open Sans',
              fontSize: 14,
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.5,
              opacity: hoveredSector === index ? 1 : 0.7,
              transition: 'opacity 0.3s ease'
            }}>
              {sector.description}
            </p>
          </div>
        ))}
      </div>

      {/* Connection Visualization */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        borderRadius: '24px',
        padding: '3rem',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <h3 style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: 28,
          color: '#F1F5F9',
          marginBottom: '1rem'
        }}>
          Interconnected Solutions
        </h3>
        <p style={{
          fontFamily: 'Open Sans',
          fontSize: 16,
          color: '#94A3B8',
          maxWidth: 800,
          margin: '0 auto 2rem auto',
          lineHeight: 1.6
        }}>
          Our platform creates seamless connections between different sectors, enabling data flow and process automation across your entire business ecosystem.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: 14,
            fontWeight: 600
          }}>
            Real-time Data Sync
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: 14,
            fontWeight: 600
          }}>
            Cross-sector Analytics
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #1E3A8A 100%)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: 14,
            fontWeight: 600
          }}>
            Unified Dashboard
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SectorCoverage;
