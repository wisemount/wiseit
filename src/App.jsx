import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import SectorCoverage from './components/SectorCoverage';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
// import Pricing from './components/Pricing'; // Uncomment if needed
import { WiseStudio } from './components/products';
import './App.css';

function HomePage() {
  console.log('HomePage component rendered');
  return (
    <>
      <TopBar />
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="products">
        <ProductShowcase />
      </div>
      {/* <Testimonials /> */}
      <div id="about" style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, rgba(30,58,138,0.05) 0%, rgba(124,58,237,0.05) 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#F1F5F9',
            marginBottom: '2rem'
          }}>
            About WiseMount
          </h2>
          <p style={{
            fontFamily: 'Open Sans',
            fontSize: '1.1rem',
            color: '#94A3B8',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            “Digital Unity Built for All. Powered by WiseMount is more than our motto — it’s our mission. We build smart, scalable digital solutions for 20+ industries, helping businesses of all sizes innovate, automate, and elevate.”
          </p>
        </div>
      </div>
      <div id="services">
        <SectorCoverage />
      </div>
      {/* <Pricing /> */}
      <CallToAction />
      {/* <div id="contact" style={{width: '100%', padding: '2rem 0'}}>
        <div className="container">
          <ContactForm />
        </div>
      </div> */}
      <Footer />
    </>
  );
}

function App() {
  console.log('App component rendered');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wisestudio" element={<WiseStudio />} />
      </Routes>
    </Router>
  );
}

export default App;
