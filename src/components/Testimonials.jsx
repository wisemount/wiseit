import React from 'react';

const testimonials = [
  {
    quote: 'WiseMount helped us digitize our entire hospital workflow. The WiseCare platform is a game changer!',
    name: 'Dr. A. Sharma',
    company: 'Sunrise Hospitals',
    image: 'https://placehold.co/64x64/2A3FCD/fff?text=AS',
  },
  {
    quote: 'Our online sales grew 3x after moving to WiseStore. The platform is robust and easy to use.',
    name: 'Priya Mehta',
    company: 'UrbanMart',
    image: 'https://placehold.co/64x64/FF6B35/fff?text=PM',
  },
  {
    quote: 'WiseBills made our invoicing and billing effortless. Highly recommended for SMEs!',
    name: 'R. Kumar',
    company: 'Kumar & Co.',
    image: 'https://placehold.co/64x64/00C9B1/fff?text=RK',
  },
];

const Testimonials = () => (
  <section style={{background: '#fff', padding: '3rem 0', borderRadius: 32, margin: '2rem 0'}}>
    <h2 style={{fontFamily: 'Poppins', fontWeight: 900, fontSize: 32, color: '#1E293B', textAlign: 'center', marginBottom: 32}}>
      What Our Clients Say
    </h2>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center'}}>
      {testimonials.map(t => (
        <div key={t.name} className="card" style={{width: 320, minHeight: 180, alignItems: 'center', textAlign: 'center'}}>
          <img src={t.image} alt={t.name} style={{width: 64, height: 64, borderRadius: '50%', marginBottom: 12}} />
          <p style={{fontFamily: 'Open Sans', fontSize: 16, fontStyle: 'italic', marginBottom: 8}}>&ldquo;{t.quote}&rdquo;</p>
          <span style={{fontWeight: 700, color: 'var(--color-secondary)'}}>{t.name}</span>
          <br />
          <span style={{fontSize: 14, color: '#888'}}>{t.company}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
