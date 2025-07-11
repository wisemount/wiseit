import React, { useState } from 'react';

const sectors = [
  { name: 'Smart IT & AI Solutions', icon: '🤖', color: '#6366F1', description: 'Smart automation, project tools, analytics, and digital transformation services' },
  { name: 'Health & Wellness', icon: '❤️', color: '#DC2626', description: 'Telemedicine, patient records, therapy apps, and wellness platforms' },
  { name: 'Retail', icon: '🛍️', color: '#F97316', description: 'E-commerce, inventory, POS, and customer loyalty systems' },
  { name: 'Education', icon: '🎓', color: '#7C3AED', description: 'Online learning, student portals, assessments, and course platforms' },
  { name: 'Manufacturing', icon: '🏭', color: '#EC4899', description: 'Production tools, quality checks, and supply chain management' },
  { name: 'Transport & Mobility', icon: '🚗', color: '#10B981', description: 'Fleet tracking, servicing, delivery, and auto dealership tools' },
  { name: 'Hospitality & Tourism', icon: '🏨', color: '#F59E0B', description: 'Hotel booking, guest services, and travel experience platforms' },
  { name: 'Real Estate', icon: '🏠', color: '#06B6D4', description: 'CRM, property listings, rental tools, and virtual tours' },
  { name: 'Legal', icon: '⚖️', color: '#7C3AED', description: 'Case management, legal CRM, and contract automation' },
  { name: 'Agriculture', icon: '🌾', color: '#22C55E', description: 'Farm management, crop tracking, and agri supply systems' },
  { name: 'Marine Tech', icon: '⚓', color: '#0EA5E9', description: 'Vessel tracking, port scheduling, and maritime logistics' },
  { name: 'Export & Import', icon: '🚢', color: '#8B5CF6', description: 'Trade management, shipping docs, and customs automation' },
  { name: 'Green, Bio & Deep Tech', icon: '🧬', color: '#059669', description: 'Sustainable tech, biotech tools, and R&D platforms' },
  { name: 'Construction & Infrastructure', icon: '🏗️', color: '#F59E0B', description: 'BOQ tools, site tracking, and smart project management' },
  { name: 'Media, Entertainment & Creators', icon: '🎬', color: '#EF4444', description: 'Content creation, OTT tools, and influencer platforms' },
  { name: 'GovTech & Public Sector', icon: '🏛️', color: '#6366F1', description: 'Smart dashboards, public services, and governance tools' },
  { name: 'FinTech & Trading', icon: '💸', color: '#10B981', description: 'Payments, lending, insurance, and trading platforms' },
  { name: 'NGO & CSR Tech', icon: '🫱‍🫲', color: '#F97316', description: 'Donor CRM, CSR dashboards, and impact tracking' },
  { name: 'Food & Wellness Products', icon: '🥗', color: '#84CC16', description: 'Organic foods, health products, and D2C wellness brands' },
  { name: 'Gaming, AR/VR & Metaverse', icon: '🎮', color: '#8B5CF6', description: 'Gamified learning, AR tours, and immersive brand experiences' },
];

const SectorCoverage = () => {
  const [hoveredSector, setHoveredSector] = useState(null);
  const theme = 'light'; // This should be derived from your app's context or state

  return (
    <section style={{padding: '4rem 0', width: '100%', overflow: 'hidden'}}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
          background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 30%, #94A3B8 70%, #64748B 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 16,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          filter: 'drop-shadow(0 1px 2px rgba(255,255,255,0.1))'
        }}>
          "Built for All. Powered by WiseMount's Digital Unity."
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
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 'clamp(1rem, 2vw, 1.5rem)',
        marginBottom: '3rem'
      }} className="sector-grid">
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
              padding: 'clamp(1rem, 3vw, 2rem)',
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
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
              transform: hoveredSector === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}>
              {sector.icon}
            </div>
            <h3 style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(16px, 3vw, 24px)',
              color: '#F1F5F9',
              margin: '0 0 clamp(6px, 1.5vw, 12px) 0',
              lineHeight: 1.2
            }}>
              {sector.name}
            </h3>
            <p style={{
              fontFamily: 'Open Sans',
              fontSize: 'clamp(12px, 2vw, 14px)',
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
      </div>
    </section>
  );
};

export default SectorCoverage;
