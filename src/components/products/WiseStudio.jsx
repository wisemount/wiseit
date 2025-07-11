import React from 'react';
import './WiseStudio.css';
// Use only non-backup logo as hero and feature images
import studioHero from '../../assets/wisestudio-logo.png';

const features = [
  {
    title: 'All-in-One Digital Platform',
    description: 'Manage classes, schedules, payments, and communication in one seamless dashboard. Designed for professionals, studios, and institutions.',
    image: studioHero,
  },
  {
    title: 'Automated Reminders & Analytics',
    description: 'Automate reminders for classes, payments, and events. Get actionable insights with advanced analytics and reporting.',
    image: studioHero,
  },
  {
    title: 'Custom Branding & Mobile Access',
    description: 'White-label your studio, offer branded mobile access, and integrate with your favorite tools (Zoom, Google Meet, WhatsApp, and more).',
    image: studioHero,
  },
];

const WiseStudio = () => (
  <main className="wisestudio-main">
    <section className="wisestudio-hero">
      <img src={studioHero} alt="WiseStudio Hero" className="wisestudio-hero-img" />
      <div className="wisestudio-hero-content">
        <h1 className="wisestudio-title">WiseStudio</h1>
        <p className="wisestudio-tagline">Empowering Studios & Professionals with Smart Digital Solutions</p>
        <a href="#contact" className="wisestudio-cta-btn">Get Started</a>
      </div>
    </section>
    <section className="wisestudio-features">
      <h2 className="wisestudio-section-title">Key Features</h2>
      <div className="wisestudio-features-grid">
        {features.map((f, i) => (
          <div className="wisestudio-feature-card" key={i}>
            <img src={f.image} alt={f.title} className="wisestudio-feature-img" />
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="wisestudio-snapshots">
      <h2 className="wisestudio-section-title">Snapshots</h2>
      <div className="wisestudio-snapshots-grid">
        <div className="wisestudio-snapshot-placeholder">Add your snapshot images here</div>
      </div>
    </section>
    <section className="wisestudio-contact">
      <h2>Ready to Transform Your Studio?</h2>
      <a href="#contact" className="wisestudio-cta-btn">Contact Us</a>
    </section>
  </main>
);

export default WiseStudio;
