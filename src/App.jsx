import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import SectorCoverage from './components/SectorCoverage';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { WiseStudio } from './components/products';
import './App.css';

function HomePage() {
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
      <Testimonials />
      <div id="services">
        <SectorCoverage />
      </div>
      <CallToAction />
      <div id="contact" style={{width: '100%', padding: '2rem 0'}}>
        <div className="container">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/wiseIT">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiseIT" element={<HomePage />} />
        <Route path="/wiseIT/wisestudio" element={<WiseStudio />} />
        <Route path="/wisestudio" element={<WiseStudio />} />
      </Routes>
    </Router>
  );
}

export default App;
